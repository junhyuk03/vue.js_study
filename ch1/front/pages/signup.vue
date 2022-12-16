<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
            <v-form v-model = 'valid'>
              <v-subheader>회원가입</v-subheader>
              <v-text-field
                v-model = 'email'
                label = '이메일'
                type = 'email'
                required
              />
              <v-text-field
                v-model = 'passward'
                label = '비밀번호'
                type = 'passward'
                required
              />
              <v-text-field
                v-model = 'passwardCheck'
                label = '비밀번호 확인'
                type = 'passward'
                required
              />
              <v-text-field
                v-model = 'nickname'
                label = '닉네임'
                type = 'nickname'
                required
              />
              <v-checkbox
                v-model = 'terms'
                required
                label = '개인정보 동의'
              />
              <v-btn color = 'green' type="submit"> 가입하기 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
    export default {
        data() {
            return{
              valid: false,
              email: '',
              passward: '',
              passwardCheck: '',
              nickname: '',
              terms: false,
              test: '',
            }
        },
    }
</script>

<style>

</style>

