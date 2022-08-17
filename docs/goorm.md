# GoormIDE Container

## 설정

- pip3 설치
	- 놀랍게도 ubuntu 서버에 python은 깔려있으나 pip3는 깔려있지 않다.
	- `apt-get install python3-pip` 명령어를 통해 설치해야 한다.
- [fastapi, uvicorn 설치](https://fastapi.tiangolo.com)
	- `pip3 install fastapi`
	- `pip3 install uvicorn[standard]`
- goorm container 항상 켜두기 모드로 실행
- nginx 설정하기
	```conf
	server {
		# 원래 있던 기본 설정임
		listen 80 default_server;
		listen [::]:80 default_server;

		# FastAPI Proxy 설정
		location / {
			proxy_pass http://localhost:8000;
		}
	}
	```
- `nohup` CLI를 통해 fastapi 백그라운드에서 실행
	- `nohup uvicorn main:app &`
