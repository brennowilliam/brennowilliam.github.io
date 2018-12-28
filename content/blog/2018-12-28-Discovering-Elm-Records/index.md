---
title: Records in Elm
date: '2018-12-28T12:05:32.169Z'
tags: ['elm']
---

Objects are present in any JavaScript codebase. As you go by your day writing code, you will use objects all the time.

One of the first things I like to learn when diving into a new language is how to use objects.

Since Elm is a pure functional language, it does not have support for objects. But, don’t get upset! Elm offers something called record which is a key/value pair data structure very similar to objects in JS.

### Syntax

The only difference between the way records are declared from objects in JS, is the use of `=` instead of `:` to separate the key and the value.

```elm
type alias Person =
    { name : String
    , age : Int
    }

p1 : Person
p1 = { name = “Sean”, age = 21 }
```

### How to get and set values

To get the value of a field in a record, you can use the `dot notation`:

```elm
p1.name
--Returns
“Sean” : String
```

Elm also provides an 'unusual' way, imho, to retrieve fields in a record that looks like a function call.

```elm
.name p1
--Returns
“Sean” : String
```

I honestly prefer the dot notation!

Updating values in a record is straight forward.

```elm
{ p1 | name = “Bob” }

-- Returns
{ age = 28, name: "Bob" }
{ age : number, name : String }
```

Since records are immutable, this will NOT modify the record. It will create a new one with the updated value.

Basically what we are saying above is: `Create a new record that contains everything person has, BUT modify the name by setting its value to “Bob”.`

### Pattern Matching

Elm also supports pattern matching on records.

This is very similar to destructuring in JavaScript.

```elm
olderThan18 { age } =
    age > 18

olderThan18 person
--Returns
True : Bool
```

### Differences

1. The value of a field will never be `undefined` or `null`.\
   When working with records in Elm, you don't need to worry of having a field with no value. Every field in a Elm record must have a value.

2. You cannot ask for a field that does not exist.\
   If you try to ask for a field that does not exist in the record, Elm compiler will
   warn you that it is not valid.

3. Since Elm has no support for objects, no more this inside of objects.\
   The use of the this keyword hunts many JavaScript developers. What is the context of this? When do we need to bind? Why is this not what I expected?
   Well, this is over with Elm. No need to worry about that anymore. :)

### Wrap-up

Working with records in elm is pretty simple. The interface looks very similar to
other languages which makes it easier to understand.

Also, records in Elm are a lot simpler than objects in JavaScript and Python for example.
So, this is the basic differences that I could see while working with records in Elm. I could’ve missed other important functionalities that I'm not aware at this moment. However, I believe that with the content presented above, you should be up and running with records in Elm.

<!-- To get a better understanding on this subject, please check this video on my youtube channel, where I show how records work on the elm repl. -->

See you next post!
