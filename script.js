const currentLang = 'zh';

function updatePageContent() {
    const t = translations[currentLang];
    document.title = t.title;
    document.querySelector('h1').textContent = t.header;
    
    // 更新所有标签文本
    document.querySelector('label[for="sex"]').textContent = t.sex + ':';
    document.querySelector('option[value="male"]').textContent = t.male;
    document.querySelector('option[value="female"]').textContent = t.female;
    // ... 更新其他元素
    
    // 更新按钮文本
    document.querySelector('button[type="submit"]').textContent = t.calculate;
    
    // 更新单位选择器的标签
    document.querySelectorAll('select[id$="Unit"] option').forEach(option => {
        option.textContent = t.units[option.value];
    });
}

// 单位转换相关常量和函数
const UNITS = {
    MGDL: 'mgdl',
    MMOLL: 'mmoll'
};

const CONVERSION = {
    CHOL_MGDL_TO_MMOLL: 0.02586,
    CHOL_MMOLL_TO_MGDL: 38.67
};

const RANGES = {
    totalChol: {
        mgdl: { min: 130, max: 320, warningMin: 100, warningMax: 400 },
        mmoll: { min: 3.4, max: 8.3, warningMin: 2.6, warningMax: 10.4 }
    },
    hdl: {
        mgdl: { min: 20, max: 100, warningMin: 10, warningMax: 120 },
        mmoll: { min: 0.5, max: 2.6, warningMin: 0.26, warningMax: 3.1 }
    },
    age: { 
        min: 40, 
        max: 79,
        warningMin: 20,  // 允许20岁以上
        warningMax: 90   // 允许到90岁
    }
};

// 存储当前值和单位
let currentValues = {
    totalChol: { value: 0, unit: UNITS.MMOLL },
    hdl: { value: 0, unit: UNITS.MMOLL }
};

// 单位转换函数
function convertValue(value, fromUnit, toUnit, type) {
    if (fromUnit === toUnit) return value;
    
    if (fromUnit === UNITS.MMOLL && toUnit === UNITS.MGDL) {
        return value * CONVERSION.CHOL_MMOLL_TO_MGDL;
    } else if (fromUnit === UNITS.MGDL && toUnit === UNITS.MMOLL) {
        return value * CONVERSION.CHOL_MGDL_TO_MMOLL;
    }
    return value;
}

// 处理单位变化
function handleUnitChange(fieldId, newUnit) {
    const input = document.getElementById(fieldId);
    const currentValue = parseFloat(input.value);
    const oldUnit = currentValues[fieldId].unit;
    
    if (!isNaN(currentValue)) {
        const convertedValue = convertValue(currentValue, oldUnit, newUnit, fieldId);
        input.value = convertedValue.toFixed(2);
        currentValues[fieldId] = { value: convertedValue, unit: newUnit };
    }
    
    updateRangeHint(fieldId);
}

// 更新范围提示
function updateRangeHint(fieldId) {
    const unit = currentValues[fieldId].unit;
    const ranges = RANGES[fieldId][unit];
    const hintElement = document.getElementById(`${fieldId}Hint`);
    const t = translations[currentLang];
    
    const minValue = unit === UNITS.MMOLL ? ranges.min.toFixed(2) : ranges.min.toFixed(0);
    const maxValue = unit === UNITS.MMOLL ? ranges.max.toFixed(2) : ranges.max.toFixed(0);
    
    hintElement.textContent = `${t.validRange}: ${minValue}-${maxValue} ${t.units[unit]}`;
}

// 移除重复的DOMContentLoaded事件监听器，只保留一个
document.addEventListener('DOMContentLoaded', function() {
    // 初始化表单
    initializeForm();
    
    // 绑定表单提交事件
    const form = document.getElementById('pceForm');
    form.addEventListener('submit', handleFormSubmit);
});

// 将表单提交处理逻辑移到单独的函数中
function handleFormSubmit(e) {
    e.preventDefault();
    
    const t = translations.zh;  // 直接使用中文翻译
    
    // 获取输入值（保持原始单位）
    const totalChol = parseFloat(document.getElementById('totalChol').value);
    const hdl = parseFloat(document.getElementById('hdl').value);
    const age = parseInt(document.getElementById('age').value);
    const systolic = parseInt(document.getElementById('systolic').value);
    
    // 验证必填字段
    if (isNaN(totalChol) || isNaN(hdl) || isNaN(age) || isNaN(systolic)) {
        alert('请填写所有必填项');
        return;
    }
    
    // 转换为mg/dL用于计算
    const totalCholMgdl = currentValues.totalChol.unit === UNITS.MMOLL ? 
        totalChol * CONVERSION.CHOL_MMOLL_TO_MGDL : 
        totalChol;
    
    const hdlMgdl = currentValues.hdl.unit === UNITS.MMOLL ? 
        hdl * CONVERSION.CHOL_MMOLL_TO_MGDL : 
        hdl;
    
    const data = {
        sex: document.getElementById('sex').value,
        race: document.getElementById('race').value,
        age: age,
        totalChol: totalCholMgdl,
        hdl: hdlMgdl,
        systolic: systolic,
        bpTreat: document.querySelector('input[name="bpTreat"]:checked').value === 'yes',
        diabetes: document.querySelector('input[name="diabetes"]:checked').value === 'yes',
        smoker: document.querySelector('input[name="smoker"]:checked').value === 'yes'
    };

    // 使用原始单位进行验证
    const validation = validateInput({
        ...data,
        totalChol: totalChol,
        hdl: hdl
    });
    
    if (validation.errors.length > 0) {
        alert(t.errors.header + '\n\n' + validation.errors.join('\n'));
        return;
    }
    
    if (validation.warnings.length > 0) {
        if (!confirm(t.warnings.header + '\n\n' + validation.warnings.join('\n') + '\n\n' + t.warnings.continue)) {
            return;
        }
    }

    const risk = calculateRisk(data);
    displayResult(risk, data);
}

// 初始化函数
function initializeForm() {
    // 设置默认单位和更新提示
    updateRangeHint('totalChol');
    updateRangeHint('hdl');
    
    // 添加输入值变化监听
    ['totalChol', 'hdl'].forEach(fieldId => {
        const input = document.getElementById(fieldId);
        input.addEventListener('input', () => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                currentValues[fieldId].value = value;
            }
        });
    });
    
    // 添加年龄范围提示
    const ageHint = document.getElementById('ageHint');
    const t = translations[currentLang];
    ageHint.textContent = `${t.validRange}: ${RANGES.age.warningMin}-${RANGES.age.warningMax}`;
    
    // 添加年龄输入监听
    const ageInput = document.getElementById('age');
    ageInput.addEventListener('input', () => {
        const age = parseInt(ageInput.value);
        if (age < RANGES.age.warningMin || age > RANGES.age.warningMax) {
            ageHint.style.color = '#dc3545';
        } else if (age < RANGES.age.min || age > RANGES.age.max) {
            ageHint.style.color = '#856404';
        } else {
            ageHint.style.color = '#666';
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initializeForm);

// 修改验证函数
function validateInput(data) {
    const errors = [];
    const warnings = [];
    const t = translations[currentLang];
    
    // 年龄验证
    if (data.age < RANGES.age.warningMin || data.age > RANGES.age.warningMax) {
        errors.push(t.errors.ageInvalid);
    } else if (data.age < RANGES.age.min || data.age > RANGES.age.max) {
        warnings.push(t.warnings.ageRange);
    }
    
    // 总胆固醇验证 - 使用原始单位进行比较
    const totalCholRanges = RANGES.totalChol[currentValues.totalChol.unit];
    if (data.totalChol < totalCholRanges.warningMin || data.totalChol > totalCholRanges.warningMax) {
        errors.push(t.errors.cholInvalid);
    } else if (data.totalChol < totalCholRanges.min || data.totalChol > totalCholRanges.max) {
        warnings.push(t.warnings.cholRange);
    }
    
    // HDL胆固醇验证 - 使用原始单位进行比较
    const hdlRanges = RANGES.hdl[currentValues.hdl.unit];
    if (data.hdl < hdlRanges.warningMin || data.hdl > hdlRanges.warningMax) {
        errors.push(t.errors.hdlInvalid);
    } else if (data.hdl < hdlRanges.min || data.hdl > hdlRanges.max) {
        warnings.push(t.warnings.hdlRange);
    }
    
    // 收缩压验证
    if (data.systolic < 70 || data.systolic > 250) {
        errors.push(t.errors.bpInvalid);
    } else if (data.systolic < 90 || data.systolic > 200) {
        warnings.push(t.warnings.bpRange);
    }
    
    return { errors, warnings };
}

// 更新计算风险的函数
function calculateRisk(data) {
    // 2019 ACC/AHA Guideline PCE系数
    const coefficients = {
        female: {
            // 女性系数
            ln_age: 2.469,
            ln_total_chol: 0.302,
            ln_hdl: -0.307,
            ln_treated_sbp: 1.916,
            ln_untreated_sbp: 1.809,
            ln_age_sbp_treated: 0,
            ln_age_sbp_untreated: 0,
            current_smoker: 0.549,
            diabetes: 0.645,
            mean_age: 3.8686,
            mean_total_chol: 5.3704,
            mean_hdl: 3.8284,
            mean_sbp_treated: 4.7835,
            mean_sbp_untreated: 4.7835,
            baseline_survival: 0.9665
        },
        male: {
            // 男性系数
            ln_age: 3.11296,
            ln_total_chol: 0.97596,
            ln_hdl: -0.93263,
            ln_treated_sbp: 1.99881,
            ln_untreated_sbp: 1.85508,
            ln_age_sbp_treated: 0,
            ln_age_sbp_untreated: 0,
            current_smoker: 0.65451,
            diabetes: 0.57367,
            mean_age: 3.8686,
            mean_total_chol: 5.3704,
            mean_hdl: 3.8284,
            mean_sbp_treated: 4.7835,
            mean_sbp_untreated: 4.7835,
            baseline_survival: 0.9144
        }
    };

    const coef = coefficients[data.sex];
    
    // 计算中心化的自然对数值
    const lnAge = Math.log(data.age) - coef.mean_age;
    const lnTotalChol = Math.log(data.totalChol) - coef.mean_total_chol;
    const lnHdl = Math.log(data.hdl) - coef.mean_hdl;
    const lnSbp = Math.log(data.systolic) - (data.bpTreat ? 
        coef.mean_sbp_treated : coef.mean_sbp_untreated);

    // 计算个人得分
    let sum = 0;

    // 1. 年龄项
    sum += coef.ln_age * lnAge;

    // 2. 总胆固醇项
    sum += coef.ln_total_chol * lnTotalChol;

    // 3. HDL胆固醇项
    sum += coef.ln_hdl * lnHdl;

    // 4. 收缩压项
    if (data.bpTreat) {
        sum += coef.ln_treated_sbp * lnSbp;
        if (coef.ln_age_sbp_treated) {
            sum += coef.ln_age_sbp_treated * lnAge * lnSbp;
        }
    } else {
        sum += coef.ln_untreated_sbp * lnSbp;
        if (coef.ln_age_sbp_untreated) {
            sum += coef.ln_age_sbp_untreated * lnAge * lnSbp;
        }
    }

    // 5. 吸烟项
    if (data.smoker) {
        sum += coef.current_smoker;
    }

    // 6. 糖尿病项
    if (data.diabetes) {
        sum += coef.diabetes;
    }

    // 计算10年风险
    const risk = (1 - Math.pow(coef.baseline_survival, Math.exp(sum))) * 100;

    // 种族调整
    let adjustedRisk = risk;
    if (data.race === 'asian') {
        adjustedRisk *= 0.5;  // 亚裔风险调整
    } else if (data.race === 'aa') {
        adjustedRisk *= 1.3;  // 非裔美国人风险调整
    }

    console.log('Risk calculation details:', {
        sex: data.sex,
        age: data.age,
        totalChol: data.totalChol,
        hdl: data.hdl,
        systolic: data.systolic,
        bpTreat: data.bpTreat,
        smoker: data.smoker,
        diabetes: data.diabetes,
        race: data.race,
        lnValues: {
            lnAge,
            lnTotalChol,
            lnHdl,
            lnSbp
        },
        sum: sum,
        baselineRisk: risk,
        adjustedRisk: adjustedRisk
    });

    return Math.min(100, Math.max(0, adjustedRisk));
}

// 更新风险等级的阈值和建议
function getRiskAdvice(risk, data) {
    const t = translations.zh;
    let adviceList = [];
    let riskLevel = '';
    
    // 确定风险等级和获取相应的建议
    if (risk < 5) {
        riskLevel = t.lowRisk;
        // 获取低风险建议
        adviceList = [
            t.advice.lowRisk.guidelines_notice,
            t.advice.lowRisk.lifestyle,
            data.bpTreat ? t.advice.lowRisk.bp_treated : t.advice.lowRisk.bp_untreated,
            data.diabetes ? t.advice.lowRisk.diabetes : null,
            t.advice.lowRisk.lipids
        ];
    } else if (risk < 7.5) {
        riskLevel = t.moderateRisk;
        // 获取中等风险建议
        adviceList = [
            t.advice.moderateRisk.guidelines_notice,
            t.advice.moderateRisk.lifestyle,
            data.bpTreat ? t.advice.moderateRisk.bp_treated : t.advice.moderateRisk.bp_untreated,
            data.diabetes ? t.advice.moderateRisk.diabetes : null,
            t.advice.moderateRisk.lipids
        ];
    } else {
        riskLevel = t.highRisk;
        // 获取高风险建议
        adviceList = [
            t.advice.highRisk.guidelines_notice,
            t.advice.highRisk.lifestyle,
            data.bpTreat ? t.advice.highRisk.bp_treated : t.advice.highRisk.bp_untreated,
            data.diabetes ? t.advice.highRisk.diabetes : null,
            t.advice.highRisk.lipids,
            t.advice.highRisk.monitoring
        ];
    }

    // 过滤掉null值（未适用的建议）
    adviceList = adviceList.filter(advice => advice !== null);

    return {
        level: riskLevel,
        advice: adviceList
    };
}

// 修改 displayResult 函数以更好地显示建议
function displayResult(risk, data) {
    const resultDiv = document.getElementById('result');
    const riskScore = document.getElementById('riskScore');
    const riskLevel = document.getElementById('riskLevel');
    
    resultDiv.classList.remove('hidden');
    riskScore.textContent = risk.toFixed(1);
    
    const riskAdvice = getRiskAdvice(risk, data);
    
    let adviceHtml = `<div class="${riskAdvice.level.toLowerCase().replace(/\s+/g, '-')}-risk">`;
    adviceHtml += `<h3>${riskAdvice.level}</h3><ul>`;
    
    riskAdvice.advice.forEach(item => {
        if (typeof item === 'string') {
            const adviceItems = item.split('\n');
            adviceItems.forEach(adviceItem => {
                if (adviceItem.trim()) {
                    // 处理指南提示的特殊格式
                    if (adviceItem.startsWith('•')) {
                        adviceHtml += `<li style="margin-left: 20px;">${adviceItem}</li>`;
                    } else {
                        adviceHtml += `<li>${adviceItem}</li>`;
                    }
                }
            });
        }
    });
    
    adviceHtml += '</ul></div>';
    
    riskLevel.innerHTML = adviceHtml;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
} 