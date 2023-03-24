<template>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="acco">
            <el-input type="text" v-model="ruleForm.acco" autocomplete="off" :placeholder="$t('loginAcc')">
                <template slot="prepend">
                    <i class="el-icon-user-solid"></i>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('loginPass')">
                <template slot="prepend">
                    <i class="el-icon-lock"></i>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="loginsubimt" type="primary" @click="submitForm('ruleForm')">{{ $t('login') }}</el-button>
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
    methods: {
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>


<style scoped>
.loginsubimt{
    width: 100%;
}
</style>