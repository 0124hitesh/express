import requests

url='https://skin-cancer-detection-api351.herokuapp.com/upload'
img={'image':open('./1.jpg','rb')}
r=requests.post(url,files=img)
print(r.json())
