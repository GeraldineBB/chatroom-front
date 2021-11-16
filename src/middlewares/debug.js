// middleware = fonction qu'on va exporter
// fonction qui retourne une fonction qui retourne une fonction = currying
// comme si fonction avec 3 paramètres

// un middleware est une triple fléchée (WOOOOOOO)
// mais ça équivaut à une fonction avec 3 paramètres (AAH !)

// dans un middleware, on a accès au store :
// - (et donc à store.getState pour lire une info du state
// -  et à store.dispatch pour emmetre une intention)

// on a accès à next : une fonction à appeler si la route de l'action doit se poursuivre vers le prochain middleware ou le reducer s'il s'agit du dernier middleware

// on a accès à l'action qui est en route vers le reducer

// on va pouvoir interagir avec le store (récup des info depuis le state, emmetre des actions, et décider si on laisse passer l'action dans le reducer)

// on va brancher nos middleware au store

const debugMiddleWare = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
