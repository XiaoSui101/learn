<template>
    <el-form label-width="80px" ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item label="账号" prop="acco">
            <el-input v-model="ruleForm.acco"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button>{{ $t('login') }}</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
export default {
    name: 'loginFrom',
    data() {
        return {
            ruleForm: {
                acco: '',
                pass: '',
            },
            rules: {
                acco: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }

        };
    },
}
</script>