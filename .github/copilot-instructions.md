# Sign Learning Assistant

## About the Project

This project is an attempt to create a custom sign language recognition assistant. It's specifically tailored for French sign language so other languages might not work as expected.
It is primarily educational, aimed at understanding how to build and manage an AI model.

## Features

The project will enable :

1. letters recognition through video streaming (webcam).
2. Words and sentences recognition based on what is interpreted.
3. Transcription restitution, text streaming to the frontend.

## Technical part

### Hand detection and letters recognition

Objective: transcription from sign language (LSF) to french words, recorded by webcam.

- capture video with browser api
- detecting hands with MediaPipe or Tensorflow
- recognition:
  - collect or use LSF dataset (alphabet)
  - train a CNN model or transfert learning (MobileNet)
  - classify letter gestures

### Words and Sentences

Objective: words and sentences recognition

- Buffering letters (with timing, end of word)
- ortographic correction
- (optional) NLP for sentences suggestions
- ponctuation

### Re-Transcription in words in frontend

Objective: Display in realtime the corresponding text to the signs

- text streaming (websockets or polling)
- interface
  - video
  - text zone
  - history of sentences

## Architecture

| Étape                          | Outil                                         |
| ------------------------------ | --------------------------------------------- |
| Détection des mains            | ✅ MediaPipe                                  |
| Extraction des landmarks       | ✅ MediaPipe                                  |
| Reconnaissance des lettres     | ✅ TensorFlow (modèle entraîné sur landmarks) |
| Intégration dans le navigateur | ✅ TensorFlow.js + MediaPipe JS               |

```
sign-transcriber-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── VideoCapture.tsx       # Webcam + frame extraction
│   │   ├── HandDetection.tsx      # MediaPipe ou TF.js model
│   │   ├── LetterRecognition.tsx  # Classification des gestes
│   │   └── TextStream.tsx         # Affichage du texte
│   ├── utils/
│   │   └── buffer.ts              # Gestion du flux de lettres
│   └── model/
│       └── letter_model.json      # Modèle TensorFlow.js
├── package.json
└── README.md

```
