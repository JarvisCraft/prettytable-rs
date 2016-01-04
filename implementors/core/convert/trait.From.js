(function() {var implementors = {};
implementors['prettytable'] = ["impl&lt;'a, T: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/string/trait.ToString.html' title='collections::string::ToString'>ToString</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a T&gt; for <a class='struct' href='prettytable/cell/struct.Cell.html' title='prettytable::cell::Cell'>Cell</a>","impl&lt;T, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;T&gt; for <a class='struct' href='prettytable/row/struct.Row.html' title='prettytable::row::Row'>Row</a> <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/string/trait.ToString.html' title='collections::string::ToString'>ToString</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.IntoIterator.html' title='core::iter::IntoIterator'>IntoIterator</a>&lt;Item=A&gt;</span>","impl&lt;T, A, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;T&gt; for <a class='struct' href='prettytable/struct.Table.html' title='prettytable::Table'>Table</a> <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/string/trait.ToString.html' title='collections::string::ToString'>ToString</a>, A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.IntoIterator.html' title='core::iter::IntoIterator'>IntoIterator</a>&lt;Item=B&gt;, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.IntoIterator.html' title='core::iter::IntoIterator'>IntoIterator</a>&lt;Item=A&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()