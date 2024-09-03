# Roadmap

This project is an attempt to create my own custom sign language (french version) recognition assistant.
This project has a only an educational purpose and may help me to understand how to build and handle my own AI model.

- [ ] create a model to detect letters in sign language (fr version)
- [ ] know if it's a letter or not
- [ ] connect it to a camera through website to interact with user while signing
- [ ] write on the site insights on the quality of signs (enhancement, wrong positions etc)

# Components

| domain   | techno              | description                                                           |
| -------- | ------------------- | --------------------------------------------------------------------- |
| frontend | vitejs              | a basic frontend to handle camera link                                |
| backend  | python script       | a basic python script to handle the model                             |
| models   | Tensoflow and keras | repository for models, built with keras and converted to tensorflowjs |
| scripts  | bash                | tasks automation                                                      |

## Frontend

The frontend is built with [vitejs](https://vitejs.dev/) in vanilla flavor (html, css, js), because I don't have time (lol).

```shell
cd frontend/
yarn && yarn dev # Start the dev server, listenning on http://localhost:5173/
```

## Backend

The backend will be in Python, scripts to generate and handle the model. Maybe a server to expose recognition features.

# Resources

- [Python mac install](https://mac.install.guide/python/install)
- [Pyenv mac](https://mac.install.guide/python/install-pyenv)
- [Tensorflowjs](https://www.tensorflow.org/js?hl=fr)
- [Teachable Machine](https://teachablemachine.withgoogle.com/train/image)
- [Alphabet](https://fr.wikipedia.org/wiki/Langue_des_signes_fran%C3%A7aise)
- [Kaggle - Sign Language MNIST](https://www.kaggle.com/datasets/datamunge/sign-language-mnist?resource=download)
