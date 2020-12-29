# Create Your Own InterMine!

This guide will show you how to create a new InterMine. You will need all the dependencies listed in `/system-requirements/software/index`{.interpreted-text role="doc"}.

::: {.note} ::: {.title} Note :::

These instructions assume you have taken the `/get-started/tutorial/index`{.interpreted-text role="doc"}, a detailed guide to integrating data with InterMine. :::

See `/get-started/quick-start`{.interpreted-text role="doc"} to run our test InterMine - BioTestMine.

1. Run a script to create your InterMine

Download the script.

```text
~/git/ $ git clone https://github.com/intermine/intermine-scripts.git
```

Execute the script to generate your InterMine instance. Here we are using \[TigerMine\]{.title-ref} but of course you would use your mine name here.

```text
~/git/ $ ~/git/intermine-scripts/make_mine TigerMine
```

You will see a message like: \[created /home/$USER/git/tigermine directory for tigermine\]{.title-ref}.

You now have an InterMine! The `tutorial </get-started/tutorial/index>`{.interpreted-text role="doc"} goes into detail about the various files that comprise an InterMine.

1. Add a mine properties file

Your InterMine uses a properties file for database usernames and passwords, let\'s create that file now.

Make an intermine directory in your home directory.

```text
# change to be in your home directory
~/git $ cd
# make an intermine directory
~ $ mkdir .intermine
```

Copy the properties file you created in the tutorial.

```text
~/.intermine $ wget https://github.com/intermine/biotestmine/blob/master/data/biotestmine.properties 
```

Rename the file to match your Mine.

```text
~/.intermine $ mv biotestmine.properties tigermine.properties
```

Now update your new properties files with the values correct for your InterMine. You\'ll want to update the details for your InterMine databases, you\'ll create those in the next step.

See `/webapp/properties/intermine-properties`{.interpreted-text role="doc"} for details on this file and what each property means.

1. Create databases

Just as in the demo, you will create your InterMine databases.

```text
# move into your mine directory
~ $ cd ~/git/tigermine
# create the database for your mine data
~/git/tigermine $ createdb tigermine
~/git/tigermine $ createdb items-tigermine
# create the database for user information
~/git/tigermine $ createdb userprofile-tigermine
```

::: {.note} ::: {.title} Note :::

These database names should match the ones you added to your mine.properties file in the previous step. :::

These databases are empty. We\'ll populate the main database in the following steps, but let\'s put some default information in our user database now.

```text
# create the empty tables for the user database, plus add the superuser
~/git/tigermine $ ./gradlew buildUserDB
```

1. Update project file

The data loaded into your mine is controlled by the \[project.xml\]{.title-ref} file located in the root of your mine directory. See `/database/database-building/project-xml`{.interpreted-text role="doc"} for an in depth description of this file.

InterMine has a few dozen libraries for popular data sources you can use. See `/database/data-sources/library/index`{.interpreted-text role="doc"} for the full list. Select one of the data sources and add it to your project XML file. Don\'t forget to download the data too.

For example, `/database/data-sources/library/ncbi-gene`{.interpreted-text role="doc"} loads gene information from the NCBI. Download the data files listed, then add the given project XML entry to your own mine\'s project XML file, like so:

See `/database/data-sources/custom/index`{.interpreted-text role="doc"} if you want to load your own data into your mine.

You can also add \"postprocesses\" to your build, these are tasks that run after the database build, tasks to build the search index for example. Here are common ones you might want to include:

```text
<post-processing>
  <post-process name="do-sources" />
  <post-process name="create-attribute-indexes" />
  <post-process name="summarise-objectstore" />
  <post-process name="create-autocomplete-index" />
  <post-process name="create-search-index" />
</post-processing>
```

See `/database/database-building/post-processing/index`{.interpreted-text role="doc"} for details on what postprocesses do.

1. Set up your search index \(optional\)

Solr handles the keyword search in InterMine. See `/system-requirements/software/solr`{.interpreted-text role="doc"} for details on how to set Solr up for your mine.

If you skip this step, your mine will work fine but the keyword search will fail.

1. Build + deploy your webapp

Now run the build!

```text
# download the script
~/git/tigermine $ wget https://raw.githubusercontent.com/intermine/intermine-scripts/master/project_build
# make executable
~/git/tigermine $ chmod +x project_build
```

Run the \[project\_build\]{.title-ref} script from your \[mine\]{.title-ref} directory:

```text
~/git/tigermine $ ./project_build -b localhost /data/tigermine-build
```

See `/database/database-building/build-script`{.interpreted-text role="doc"} for more on the \[project\_build\]{.title-ref} script.

Your build \(depending on your sources\) will take a few minutes to run. Once that is done, deploy your webapp. Make sure tomcat is running.

```text
# deploy your webapp to tomcat
~/git/tigermine $ ./gradlew cargoDeployRemote 
# if you have already deployed once, you will want to run this command instead:
~/git/tigermine $ ./gradlew cargoRedeployRemote 
```

See `/system-requirements/software/gradle/index`{.interpreted-text role="doc"} for more on Gradle.

## Next steps

Congratulations! You now have an InterMine! Visit it at localhost:8080/tigermine. \(replace \[tigermine\]{.title-ref} with the name your chose for your mine\)

Next you will want to:

* \[learn how to use the InterMine

  webapp\]\([http://intermine.org/tutorials/](http://intermine.org/tutorials/)\)

* `customise your mine </webapp/properties/index>`{.interpreted-text

  role="doc"}

* `add your own data sources </database/data-sources/custom/index>`{.interpreted-text

  role="doc"}

* `join the intermine mailing list </support/mailing-list>`{.interpreted-text

  role="doc"}

::: {.index} Getting started, make\_mine :::
