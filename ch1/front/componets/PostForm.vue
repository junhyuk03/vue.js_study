<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm" >
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success="success"
          :success-messages="successMessage"
          :rules="[v => setTrim(v) || '내용을 입력하세요']"
          @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>짹짹</v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        valid: false,
        hideDetails: true,
        successMessages: '',
        succes: false,
      }
    },
    computed: {
      ... mapState('user',['me'])
    },
    methods: {
      onChangeTextarea() {
        this.hideDetails = true;
        this.succes = false;
        this.successMessages = '';
      },
      onSubmitForm() {
        if(this.$refs.form.validate()) {
          this.$store.dispatch('post/add', {
            content : this.content,
            user: {
              nickname: this.me.nickname,
            },
            Comments: [],
            Images: [],
            id: Date.now(),
            createdAt: Date.now(),
          })
          .then(() => {
            this.content = '';
            this.hideDetails = false;
            this.succes = true;
            this.successMessages = "게시글 등록 성공!";
          })
           .catch(() => {

          })
        }
      },
      setTrim(value) {
        if (!value) return false
        return !!value.trim()
      }
    }
  }
</script>

<style>

</style>