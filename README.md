##Multiply by 666##
This application multiplies any number by 666. The unit testing is done in-browser with [tape][1]. It multiplies a whole number by 666 and lists the result. The implementation is fully written, and tested, using Common.JS, Sinon, and `tape`.

##Usage##
Run this example by browserifying the code:

```shell
grunt build
open src/devil-bar.html
```

![devil-bar.png][2]

To run the tests, viewable in the console, browserifying the code:

```shell
grunt build-tests
open test/runner.html
```

![tape-console.png][3]

##Application Definition##
In this application you input a whole number and then click on a button to multiply that number by 666. The resulting number is displayed in a list. Any error, such as an invalid or decimal number, is also displayed in the list. There is also a button to clear the list. There are six derived test cases based on this functionality

##Interface Description##
There are four components: the text input, a submit button, a clear button, and a results list.

##Derived Test Cases##
- Clicking Satanize without an input should result in an error message.
- Clicking Satanize with a decimal input should result in an error message.
- Clicking Satanize with a whole number input should result in a number multiplied by 666.
- The resulting number should be displayed in a list, along with any error message.
- Clicking clear with no input should not throw an error.
- Clicking clear should clear the results list.

[1]: https://github.com/substack/tape
[2]: https://raw.github.com/janaipakos/unit-testing-with-tape/master/images/devil-bar.png
[3]: https://raw.github.com/janaipakos/unit-testing-with-tape/master/images/tape-console.png
