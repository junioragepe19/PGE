<template>
  <div id="login_user">
          <img alt="PGE_Logo" id="logo" src="../assets/pge_logo.png">
          <div id="login">
            <div id="text_login">Usuário</div>
            <input id="name_user" ref="name_user" autocomplete="off" maxlength="20" placeholder="Usuario">
          </div>
          <div id="senha">
            <div id="text_password">Senha</div>
            <input type="password" ref="pass_user" maxlength="20" autocomplete="off" id="pass_user" placeholder="********">
            <img alt="visibility_password" ref="show_pass" id="show_pass" @click="ShowPass" src="../assets/esconder.png" >
            <img alt="visibility_password" ref="hidden_pass" id="hidden_pass" @click="HidePass" src="../assets/mostrar.png" >
          </div>
        <div id="submeter">
          <button type="button" id="submit" ref="submit" name="button_Submit" @click="login">Entrar</button>
        </div>
      <div id="error_login" ref="error_login">
      <p>Usuário ou senha incorretos</p>
      </div>
  </div>
</template>

<script>
//import axios from 'axios'

export default {

  name: "login",
  data(){
    return {
        name_user: "",
        pass_user: ""
    };
  },

  methods: {
    login: function(){
      var data = {usuario: name_user.value, senha: pass_user.value}
      // axios.post('http://localhost:8080/login', data)//fazendo um post com esse usuario
      //       .then(resposta => {
      //           console.log(resposta)
      //           this.$router.push({ name: 'home' })
      //       })
      //       .catch(erro => console.log(erro))
      var login_user = {usuario: "usuariopge", senha: "senhapge123"}
      if(login_user.usuario == data.usuario && login_user.senha == data.senha){
        this.$router.push({ name: 'home' })
      }
      else{
        this.$refs.error_login.style['visibility'] = "visible";
      }
    },
    ShowPass: function(){
      this.$refs.show_pass.style['visibility'] = "hidden";
      this.$refs.hidden_pass.style['visibility'] = "visible";
      this.$refs.pass_user.type = "text";
    },

    HidePass: function(){
      this.$refs.show_pass.style['visibility'] = "visible";
      this.$refs.hidden_pass.style['visibility'] = "hidden";
      this.$refs.pass_user.type = "password";
  }
  },

    
}
</script>

<style scoped>

#login_user{
  position: relative;
}

#logo{
  position: absolute;
  left:50%;
  margin-top: 110px;
  margin-left: -111px;
  width: 222px;
  height: 112px;
}

#text_login{
  position: absolute;
  left:50%;
  margin-top: 254px;
  margin-left: -172px;
  width: 110px;
  height: 39px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

#text_password{
  position: absolute;
  left:50%;
  margin-top: 359px;
  margin-left: -172px;
  width: 110px;
  height: 39px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}
#show_pass{
  cursor: pointer;
  position: absolute;
  left:50%;
  margin-top: 403px;
  margin-left: 145px;
  width: 25px;
  height: 25px;
}

#hidden_pass{
  cursor: pointer;
  position: absolute;
  left:50%;
  margin-top: 403px;
  margin-left: 145px;
  width: 25px;
  height: 25px;
  visibility: hidden;
}
#name_user{
  position: absolute;
  left:50%;
  margin-top: 284px;
  margin-left: -174px;
  width: 349px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 15px;
  line-height: 40px;
  padding-left: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
}

#pass_user{
  position: absolute;
  left:50%;
  margin-top: 389px;
  margin-left: -174px;
  width: 349px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 18px;
  padding-left: 5px;
  font-family: 'Roboto';
  font-style: normal;

}

#submit{
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-top: 465px;
  margin-left: -170px;
  width: 349px;
  height: 71px;
  background: #269D4F;
  border-radius: 5px;
  border-color: #FFFFFF;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
}

#error_login{
  visibility: hidden;
  position: absolute;
  left:50%;
  margin-top: 530px;
  width: 275px;
  height: 27px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #E60000;
  margin-left: -110px;
}
</style>
