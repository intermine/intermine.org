# How to set up your InterMine environment on the Amazon Cloud

This is where you should learn how to start your own MalariaMine web application on the Amazon Cloud. You could also use your InterMine Amazon instance to try building MalariaMine yourself or to build your own mine there.

## Pre-requisites

You need an Amazon account: if you don\'t have one

* go to [http://aws.amazon.com](http://aws.amazon.com)
* click on `Sign Up`
* follow the instructions

You will need to set up your key pair security mechanism \(see for example step 7 below\). Alternatively you will need your aws-access-key and your aws-secret-key to start your instance \(not shown here\).

## Starting a new Instance

InterMine is publicly available on Amazon Cloud as an Image \(AMI\), with an AMI ID **ami-b1c7a9d8**.

The image contains a ready deployed MalariaMine.

1. sign in at [http://aws.amazon.com](http://aws.amazon.com)

2. go to the EC2 management console

: AWS console --&gt; [https://console.aws.amazon.com/console/home](https://console.aws.amazon.com/console/home) --&gt; EC2 console

1. if you don\'t have one, set up a security group which allows access

   to at least port

> * 22 \(SSH\)
> * 80 \(HTTP\)
> * 8080 \(TOMCAT\)
>
> you could also set up a few spare ones \(20, 21, 8009\).

::: {.note} ::: {.title} Note :::

You can do this also during step 7, but **you cannot change the security group of an instance after starting it for the first time** \(unless you use a VPC instance, see [User Guide](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html)\). :::

1. go to the IMAGES/AMI console
2. set the location on the top header \(beside your username\) to \*US

   East \(N. Virginia\)\*

3. set the filter to _Public Images_ and search for **InterMine**
4. select _BasicIntermine_ AMI \(AMI ID = ami-b1c7a9d8\)
5. launch \(and configure\) instance

> * you can use all default options for the instance characteristics
>
>   and details, but use the security group you created in step 3.
>
> * when prompted, create a new key pair \(`.pem` file\), or use one
>
>   that you already own.

1. go to the Instance console
2. select your new instance
3. when public DNS appears \(after checks, a couple of minutes\), you can

   open a terminal with

```text
$ ssh -i your_pem_file ubuntu@the_instance_public_DNS
```

## Starting an existing Instance

If you are using an existing Instance, you need to

1. sign in at [http://aws.amazon.com](http://aws.amazon.com)
2. go to the EC2 console \(see step 2 above\)
3. go to the Instance console
4. select your instance
5. start your instance \(Actions --&gt; Start\)

## Working with Your Instance

Open a terminal in Your Instance

```text
$ ssh -i your_pem_file ubuntu@the_instance_public_DNS
```

you will land in \[/home/ubuntu\]{.title-ref}

here you can find these relevant directories:

`git/intermine` the InterMine code base

`.intermine` with the properties file

`malaria` sources for building MalariaMine

### Starting/stopping the existing MalariaMine web application

In `/webapp` you\'ll find tomcat6. You can start the webapp using this command:

```text
$ ./start.sh
```

Your BioTestMine web application will then be available on

> [http://the\_instance\_public\_DNS:8080/malariamine](http://the_instance_public_DNS:8080/malariamine)

To stop the web application:

```text
$ ./stop.sh
```

### Redeploying MalariaMine

In `/home/ubuntu/git/intermine/malariamine/webapp`

```text
$ ant -v default remove-webapp release-webapp
```

### \(Re\)building MalariaMine

see [http://intermine.readthedocs.org/en/latest/get-started/tutorial/](http://intermine.readthedocs.org/en/latest/get-started/tutorial/)

In \[/home/ubuntu/git/intermine/malariamine\]{.title-ref}

```text
$ ../bio/scripts/project_build -b -v localhost ~/malariamine-dump
```

You can also follow all the steps in the build as illustrated in `/get-started/tutorial/index`{.interpreted-text role="doc"}

::: {.index} tutorial, Amazon, malariamine, ant, project\_build, cloud, AWS :::
