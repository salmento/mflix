=====
Mflix
=====
URL
-----------------
[Lets go to MFLIX] <https://mflixmz.herokuapp.com/>


Used tecnologies
-----------------
- MongoDB
- NodeJs
- Heroku
- ReactJs
- BootStrap
- HTML
- CSS
- JavaScript
- Eslint
- Babel
----------------

Node Library Dependencies
-------------------------

The dependencies for the MFlix application should be downloaded using the
``npm`` command-line tool. You can get this tool by `downloading Node.js
<https://nodejs.org/en/download/>`_. Make sure to choose the correct option for
your operating system.

Once the installation is complete, you may need to restart your computer before
using the command line tools. You can test that it's installed by running the
following command:

.. code-block:: sh

  node -v

This should print out the version of ``node`` you currently have - we recommend
using the latest Long Term Support version, currently 14.17.0, so this command should print something like
``v14.17.0``.

Once ``npm`` is installed, you can install the MFlix dependencies by running the
following command from the **mflix-js** directory:

.. code-block:: sh

  npm install

You must run this from the top level of the project, so ``npm`` has access to
the **package.json** file where the dependencies are.

You may see warnings depending on your operating system from **fsevents** or
Husky warning about **git** missing. These are informational only and do not
impact the functionality of the application. You can safely ignore them.

You may also get a **node-gyp** error. Run ``npm rebuild`` and it should resolve
this and install the dependencies required.

While running ``npm install``, you might encounter the below error regarding ``node-gyp rebuild``.
Although, it is completely harmless and you can start the application by running ``npm start``.

.. image:: https://s3.amazonaws.com/university-courses/m220/m220js-npm-install-warning.png


Running the Unit Tests
----------------------

To run the unit tests for this course, you will use `Jest
<https://jestjs.io/docs/en/getting-started>`_. Jest has been included in this
project's dependencies, so ``npm install`` should install everything you need.

Each course lab contains a module of unit tests that you can call individually
with ``npm test``. For example, to run the test **connection-pooling.test.js**,
run the command:

.. code-block:: sh

  npm test -t connection-pooling

Each ticket will contain the exact command to run that ticket's specific unit
tests. You can run these commands from anywhere in the **mflix-js** project.
