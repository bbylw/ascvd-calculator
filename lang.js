const translations = {
    zh: {
        title: "PCE计算器 - ASCVD风险评估",
        header: "10年ASCVD风险评估计算器",
        sex: "性别",
        male: "男",
        female: "女",
        race: "种族",
        asian: "亚裔",
        white: "白人",
        aa: "非裔美国人",
        other: "其他",
        age: "年龄",
        totalChol: "总胆固醇",
        hdl: "高密度脂蛋白胆固醇 (HDL-C)",
        systolic: "收缩压 (mmHg)",
        bpTreat: "高血压治疗",
        diabetes: "糖尿病",
        smoker: "吸烟",
        yes: "是",
        no: "否",
        calculate: "计算风险",
        result: "计算结果",
        riskScore: "10年ASCVD风险",
        lowRisk: "低风险",
        moderateRisk: "中等风险",
        highRisk: "高风险",
        advice: {
            lifestyle: "保持健康的生活方式",
            checkup: "定期体检",
            diet: "均衡饮食",
            exercise: "适量运动",
            statin: "考虑开始他汀类药物治疗",
            monitor: "定期监测血压和血脂",
            doctor: "建议立即就医",
            intervention: "需要积极的生活方式干预",
            medication: "可能需要药物治疗",
            control: "严格控制危险因素",
            followup: "每3-6个月复查一次"
        },
        units: {
            mgdl: "mg/dL",
            mmoll: "mmol/L",
            switchUnit: "切换单位",
            cholesterol: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            hint: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            }
        },
        errors: {
            ageRange: "年龄必须在40-79岁之间",
            cholRange: "总胆固醇值超出正常范围 (130-320 mg/dL 或 3.4-8.3 mmol/L)",
            hdlRange: "HDL胆固醇值超出正常范围 (20-100 mg/dL 或 0.5-2.6 mmol/L)",
            bpRange: "收缩压值超出正常范围 (90-200 mmHg)",
            header: "输入错误",
            ageInvalid: "年龄必须在20-90岁之间",
            cholInvalid: "总胆固醇值超出可接受范围",
            hdlInvalid: "HDL胆固醇值超出可接受范围",
            bpInvalid: "收缩压值超出可接受范围 (70-250 mmHg)"
        },
        warnings: {
            header: "注意",
            continue: "是否继续计算？\n(结果可能不够准确)",
            ageRange: "该计算器最适用于40-79岁人群，其他年龄段的计算结果仅供参考",
            cholRange: "总胆固醇值超出推荐范围，结果可能不够准确",
            hdlRange: "HDL胆固醇值超出推荐范围，结果可能不够准确",
            bpRange: "收缩压值超出推荐范围，结果可能不够准确"
        },
        validRange: "有效范围"
    },
    en: {
        title: "PCE Calculator - ASCVD Risk Assessment",
        header: "10-Year ASCVD Risk Calculator",
        sex: "Sex",
        male: "Male",
        female: "Female",
        race: "Race",
        asian: "Asian",
        white: "White",
        aa: "African American",
        other: "Other",
        age: "Age",
        totalChol: "Total Cholesterol",
        hdl: "High-Density Lipoprotein Cholesterol (HDL-C)",
        systolic: "Systolic BP (mmHg)",
        bpTreat: "BP Treatment",
        diabetes: "Diabetes",
        smoker: "Smoker",
        yes: "Yes",
        no: "No",
        calculate: "Calculate Risk",
        result: "Results",
        riskScore: "10-Year ASCVD Risk",
        lowRisk: "Low Risk",
        moderateRisk: "Moderate Risk",
        highRisk: "High Risk",
        advice: {
            lifestyle: "Maintain healthy lifestyle",
            checkup: "Regular check-ups",
            diet: "Balanced diet",
            exercise: "Regular exercise",
            statin: "Consider statin therapy",
            monitor: "Regular BP and lipid monitoring",
            doctor: "Consult doctor immediately",
            intervention: "Active lifestyle intervention needed",
            medication: "May need medication",
            control: "Strict risk factor control",
            followup: "Follow-up every 3-6 months"
        },
        units: {
            mgdl: "mg/dL",
            mmoll: "mmol/L",
            switchUnit: "Switch Unit",
            cholesterol: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            hint: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            }
        },
        errors: {
            ageRange: "Age must be between 40-79 years",
            cholRange: "Total cholesterol out of range (130-320 mg/dL or 3.4-8.3 mmol/L)",
            hdlRange: "HDL cholesterol out of range (20-100 mg/dL or 0.5-2.6 mmol/L)",
            bpRange: "Systolic BP out of range (90-200 mmHg)",
            header: "Input Error",
            ageInvalid: "Age must be between 20-90 years",
            cholInvalid: "Total cholesterol value is out of acceptable range",
            hdlInvalid: "HDL cholesterol value is out of acceptable range",
            bpInvalid: "Systolic BP must be between 70-250 mmHg"
        },
        warnings: {
            header: "Warning",
            continue: "Continue with calculation?\n(Results may be less accurate)",
            ageRange: "This calculator is most accurate for ages 40-79, results for other ages are for reference only",
            cholRange: "Total cholesterol is outside recommended range, results may be less accurate",
            hdlRange: "HDL cholesterol is outside recommended range, results may be less accurate",
            bpRange: "Systolic BP is outside recommended range, results may be less accurate"
        },
        validRange: "Valid Range"
    }
}; 