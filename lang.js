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
            followup: "每3-6个月复查一次",
            lowRisk: {
                lifestyle: "保持健康的生活方式",
                diet: "遵循健康饮食模式（如地中海饮食）",
                exercise: "每周进行150分钟中等强度或75分钟高强度有氧运动",
                checkup: "建议每3-5年进行一次心血管风险评估",
                weight: "维持健康体重（BMI <25 kg/m²）",
                smoking: "如有吸烟，建议戒烟并寻求戒烟帮助"
            },
            moderateRisk: {
                lifestyle: "加强生活方式干预",
                statin: "根据个人情况考虑他汀类药物治疗",
                bp: "血压控制目标<130/80 mmHg",
                monitor: "每年进行血压和血脂监测",
                diabetes: "如有糖尿病，建议HbA1c控制目标<7%",
                followup: "建议每年进行心血管风险评估"
            },
            highRisk: {
                doctor: "建议就医进行专业评估和治疗",
                statin: "推荐使用中等或高强度他汀类药物",
                bp: "严格控制血压至<130/80 mmHg",
                diabetes: "如有糖尿病：\n- HbA1c控制目标<7%\n- 考虑SGLT2抑制剂或GLP-1受体激动剂",
                antiplatelet: "根据具体情况考虑抗血小板治疗",
                lifestyle: "强化生活方式干预：\n- 限制钠摄入（<2300mg/日）\n- DASH饮食模式\n- 规律运动\n- 戒烟限酒",
                followup: "每3-6个月随访一次",
                monitor: "定期监测：\n- 血压\n- 血脂\n- 空腹血糖\n- 肾功能"
            }
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
            bpTreat: "如果目前正在服用降压药物，请选择'是'"
        }
    }
}; 