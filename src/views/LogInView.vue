<script setup>
</script>

<template>
  <div class="box">
    <div class="card">


      <div class="card_right">
        <form action="" class="form">
          <p class="form_title">Se connecter</p>

          <div class="form_item">
            <label for="email" class="form_label" >Email</label>
            <input type="email" id="email" required />
            
          </div>

          <div class="form_item">
            <label for="password" class="form_label">Mot de passe</label>
            <input type="password" id="password" required />
            
          </div>

          <div class="forgot_password">
            <a href="#">Mot de passe oublié ?</a>
          </div>

          <div class="remember_me">
            <label><input type="checkbox" /> Se souvenir de moi</label>
          </div>

          <button type="submit" class="form_button">Connexion</button>

          <div class="register_link">
            <p>Vous n'avez pas de compte ? <a href="#">S'inscrire</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f2f2;
  background-image: linear-gradient(#00000099, #000000b3), url('../assets/images/authimg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card {
  width: 500px;
  border-radius: 15px;
  box-shadow: 0 2px 6px #0000000d;
  background-color: #fff;
}


.card_right {
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form_title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.form_item {
  margin-bottom: 20px;
}

.form_item input {
  width: 100%;
  padding: 16px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
}
.forgot_password {
  text-align: right;
  margin-bottom: 15px;
}
.forgot_password a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}
.forgot_password a:hover {
  text-decoration: underline;
}
.remember_me {
  margin-bottom: 20px;
}
.remember_me input {
  margin-right: 5px;
}

.form_button{
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: #333;
}
.register_link {
  text-align: center;
  margin-top: 15px;
}

.register_link a {
  color: #007bff;
  text-decoration: none;
}

.register_link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
  }


  .card_right {
    padding: 20px;
  }
}
</style>


