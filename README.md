# Medifind

Software Engineering Documentations Notion Page
https://palm-nest-c1f.notion.site/Medifind-02007b41232c4ecfa19138dbc3a287f5

System Request
https://docs.google.com/document/d/1viv4AsXgOD0Vqg2N_Yhi_nC64muOQU7_3sXJ-8BcrT8/edit?usp=sharing

The backend server is hosted on aws:
http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/

The documentation for backend API avaialble at:
http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/swagger/index.html

The front-end, on the other hand, is only available for hosting locally. Follow the steps outlined below to get it running.


### To run back-end locally:

1- ```cd MediFind.Backend```

2- run ```dotnet start```



### To run front-end locally:

1- ```cd MediFind.Frontend/themeforest-6UpPidjC-docfind-medical-online-booking-react-js-template/Docfind-React```

2- run ```npm install```
If you get an error with ```npm install```, run ```npm config set legacy-peer-deps true``` then run ```npm install``` again

3- run ```npm start```

4- Refer to ```USER_GUIDE.md``` for a guide on using the front-end

### To run the tests:

1- ```cd MedifindTests```

2- run ```dotnet test```
If you get an error with ```dotnet test```, follow the instructions in the terminal to install missing dependencies and run ```dotnet test``` again
