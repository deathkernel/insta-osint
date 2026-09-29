# Insta OSINT

A small Flask web application for discovering **publicly indexed** Instagram information.

## Scope

This project is intended for public web data only. It does not attempt to bypass private accounts, authentication, access controls, or hidden personal information.

## Run locally

```bash
python -m venv .venv
```

Windows CMD:

```cmd
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open:

```
http://127.0.0.1:5000
```

## Current status

- Flask backend
- Responsive web UI
- Frontend → backend JSON flow
- Search engine integration to be added next
