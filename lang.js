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
        systolic: "当前收缩压 (mmHg)",
        bpTreat: "是否正在服用降压药",
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
        validRange: "有效范围",
        hints: {
            systolic: "请填写当前的收缩压数值，无论是否在服用降压药",
            bpTreat: "如果目前正在服用降压药物，请选择"是""
        }
    }
}; 