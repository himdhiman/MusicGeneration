# MusicGeneration


The Music Generation Model is based on Long short-term memory (LSTM), a recurrent neural network (RNN) architecture, that can efficiently learn via gradient descent.

The model is able to generate good quality instrumental music.


## Installation Documentation

    $ sudo apt install git
    
![](1.png)

    $ git clone https://github.com/himdhiman/MusicGeneration.git
    
![](2.png)
  
    $ cd MusicGeneration

    $ sudo apt-get install virtualenv
    
![](3.png)

    $ virtualenv env

    $ source env/bin/activate
    
![](4.png)
    
    $ sudo apt-get install python3.7
    
    $ sudo apt-get install python3-pip
    
    $ pip3 install -r requirements.txt
    
![](5.png)

    
![](6.png)
    
get back to main directory by executing next command 2 times

	  $ cd ..

	  $ cd ..
	  
![](7.png)
    
to launch server execute the following

	  $ python3 manage.py runserver
	  
![](8.png)
    
go to Google Chrome and open http://127.0.0.1:8000

![](9.png)
 
## Website Demo
 
Click on the Generate Music button to generate instrumental piano music. The output file will get downloaded as Output.mid. Use any music player to play the music.

![](8.png)
