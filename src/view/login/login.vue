<template>
    <div class="login">
        <div class="login-form">
            <el-card class="box-card">
                <div slot="header" class="wlc">
                    <span>{{ $t('welcome') }}</span>
                </div>
                <div class="loc">
                    <loginForm></loginForm>
                </div>
            </el-card>
            
        </div>

    </div>
</template>

<script>
import loginForm from '@/components/loginForm/loginForm'

export default {
    components: {
        loginForm
    }
}
</script>


<style scoped>
.login {
    height: 100%;
    width: 100%;
    background-image: url('../../assets/images/login-bg.jpg');
    background-position: center;

}

.box-card {
    width: 300px;
    
}

.login-form {
    position: absolute;
    right: 160px;
    top: 30%;
}

.wlc{
    font-weight: bold;
}
</style>