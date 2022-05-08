**Unit testing** is a type of automated testing meant to verify whether a small and isolated piece of the codebase—the so-called “unit”—behaves as the developer intended.

Here we are going to be testing the component Team. 

![img.png](img.png)


Unit tests are written using Jasmine

<p align="center">
  <img src="https://raw.githubusercontent.com/Iggy-Codes/logo-images/master/logos/jasmine.png" />
</p>

We can run Jasmine tests in a browser ourselves by setting up and loading a HTML file, but more commonly we use a command-line tool called Karma. 

Karma handles the process of creating HTML files, opening browsers and running tests and returning the results of those tests to the command line.


![img_1.png](img_1.png)


Testing with Jasmine is done by running all the **spec files** of the project( generated automatically with the creation of all components and services including the app component)


Here we deleted all spec file except for the <a href='https://github.com/bacembendaly99/octopus-predictions-frontend/blob/dev/src/app/components/team/team.component.spec.ts'>team.component.spec.ts</a> .

<br>
initialisation of the TestBed:
<br><br><br>

![img_5.png](img_5.png)

<br>
If we run:  

```ng test```

we get the Karma interface launched:
<br><br>


![img_3.png](img_3.png)

The first test is for the component creation:
<br><br>


![img_4.png](img_4.png)


The second test is to test an attribute inside the component : componentName.
<br><br>

![img_6.png](img_6.png)

The third test is going to be about the routing using **RouterTestingModule**  and the **spyOn the navigate function**
<br><br>


![img_7.png](img_7.png)


If everything is going as planned the Karma interface should give this result :
<br><br>

![img_8.png](img_8.png)


