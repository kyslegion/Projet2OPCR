export function createLoginHtml() {
    let main=document.querySelector('main')
    main.innerHTML=`
    <h2 class="h2">Log in</h2>
    <form class="form" id="form" method="POST">
      <label for="email">Email
        <input type="email" id="email" name="email">
      </label>
      
      <label for="password">Mot de passe
        <input type="password" id="password" name="password">
      </label>
      
      <input type="submit" value="Se connecter">
      <a href="#">Mot de passe oublié?</a>
    </form>`
}
