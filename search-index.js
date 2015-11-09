var searchIndex = {};
searchIndex['main'] = {"items":[],"paths":[]};
searchIndex['prettytable'] = {"items":[[0,"","prettytable","A formatted and aligned table printer written in rust",null,null],[3,"Table","","A Struct representing a printable table",null,null],[3,"ColumnIter","","Iterator over immutable cells in a column",null,null],[3,"ColumnIterMut","","Iterator over mutable cells in a column",null,null],[0,"cell","","This module contains definition of table/row cells stuff",null,null],[3,"Cell","prettytable::cell","Represent a table cell containing a string.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"cell"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"cell"}],"output":{"name":"cell"}}],[11,"new_align","","Create a new `Cell` initialized with content from `string`.\nText alignment in cell is configurable with the `align` argument",0,{"inputs":[{"name":"cell"},{"name":"str"},{"name":"align"}],"output":{"name":"cell"}}],[11,"new","","Create a new `Cell` initialized with content from `string`.\nBy default, content is align to `LEFT`",0,{"inputs":[{"name":"cell"},{"name":"str"}],"output":{"name":"cell"}}],[11,"align","","Set text alignment in the cell",0,{"inputs":[{"name":"cell"},{"name":"align"}],"output":null}],[11,"style","","Add a style attribute to the cell",0,{"inputs":[{"name":"cell"},{"name":"attr"}],"output":null}],[11,"with_style","","Add a style attribute to the cell. Can be chained",0,{"inputs":[{"name":"cell"},{"name":"attr"}],"output":{"name":"cell"}}],[11,"reset_style","","Remove all style attributes and reset alignment to default (LEFT)",0,{"inputs":[{"name":"cell"}],"output":null}],[11,"style_spec","","Set the cell's style by applying the given specifier string",0,{"inputs":[{"name":"cell"},{"name":"str"}],"output":{"name":"cell"}}],[11,"get_height","","Return the height of the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"usize"}}],[11,"get_width","","Return the width of the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"usize"}}],[11,"get_content","","Return a copy of the full string contained in the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"string"}}],[11,"print","","Print a partial cell to `out`. Since the cell may be multi-lined,\n`idx` is the line index to print. `col_width` is the column width used to\nfill the cells with blanks so it fits in the table.\nIf `ìdx` is higher than this cell's height, it will print empty content",0,{"inputs":[{"name":"cell"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"print_term","","Apply style then call `print` to print the cell into a terminal",0,{"inputs":[{"name":"cell"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"cell"},{"name":"t"}],"output":{"name":"cell"}}],[11,"to_string","","",0,{"inputs":[{"name":"cell"}],"output":{"name":"string"}}],[11,"default","","Return a cell initialized with a single empty `String`, with LEFT alignment",0,{"inputs":[{"name":"cell"}],"output":{"name":"cell"}}],[0,"row","prettytable","This module contains definition of table rows stuff",null,null],[3,"Row","prettytable::row","Represent a table row made of cells",null,null],[11,"fmt","","",1,{"inputs":[{"name":"row"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"new","","Create a new `Row` backed with `cells` vector",1,{"inputs":[{"name":"row"},{"name":"vec"}],"output":{"name":"row"}}],[11,"empty","","Create an row of length `size`, with empty strings stored",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"len","","Get the number of cells in this row",1,{"inputs":[{"name":"row"}],"output":{"name":"usize"}}],[11,"get_height","","Get the height of this row",1,{"inputs":[{"name":"row"}],"output":{"name":"usize"}}],[11,"get_cell_width","","Get the minimum width required by the cell in the column `column`.\nReturn 0 if the cell does not exist in this row",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"get_cell","","Get the cell at index `idx`",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"option"}}],[11,"get_mut_cell","","Get the mutable cell at index `idx`",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"option"}}],[11,"set_cell","","Set the `cell` in the row at the given `column`",1,{"inputs":[{"name":"row"},{"name":"cell"},{"name":"usize"}],"output":{"name":"result"}}],[11,"add_cell","","Append a `cell` at the end of the row",1,{"inputs":[{"name":"row"},{"name":"cell"}],"output":null}],[11,"insert_cell","","Insert `cell` at position `index`. If `index` is higher than the row lenght,\nthe cell will be appended at the end",1,{"inputs":[{"name":"row"},{"name":"usize"},{"name":"cell"}],"output":null}],[11,"remove_cell","","Remove the cell at position `index`. Silently skip if this cell does not exist",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":null}],[11,"print","","Print the row to `out`, with `separator` as column separator, and `col_width`\nspecifying the width of each columns",1,null],[11,"print_term","","Print the row to terminal `out`, with `separator` as column separator, and `col_width`\nspecifying the width of each columns. Apply style when needed",1,null],[11,"default","","",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"from_iter","","",1,{"inputs":[{"name":"row"},{"name":"t"}],"output":{"name":"row"}}],[11,"from","","",1,{"inputs":[{"name":"row"},{"name":"t"}],"output":{"name":"row"}}],[0,"format","prettytable","Define table formatting utilities",null,null],[3,"LineSeparator","prettytable::format","Contains the character used for printing a line separator",null,null],[3,"TableFormat","","Contains the table formatting rules",null,null],[4,"Align","","Alignment for cell's content",null,null],[13,"LEFT","","",2,null],[13,"CENTER","","",2,null],[13,"RIGHT","","",2,null],[17,"MINUS_PLUS_SEP","","A line separator mad of `-` and `+`",null,null],[17,"EQU_PLUS_SEP","","A line separator mad of `=` and `+`",null,null],[17,"FORMAT_DEFAULT","","Default table format, printing a table like this :",null,null],[17,"FORMAT_NO_LINESEP","","Similar to `FORMAT_DEFAULT` but without special separator after title line",null,null],[17,"FORMAT_BLANK","","Format for printing a table without any separators (only alignment)",null,null],[11,"fmt","","",2,{"inputs":[{"name":"align"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"align"}],"output":{"name":"align"}}],[11,"fmt","","",3,{"inputs":[{"name":"lineseparator"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"lineseparator"}],"output":{"name":"lineseparator"}}],[11,"new","","Create a new line separator instance where `line` is the character used to separate 2 lines\nand `cross` is the one used when column separaors and line separators cross",3,{"inputs":[{"name":"lineseparator"},{"name":"char"},{"name":"char"}],"output":{"name":"lineseparator"}}],[11,"print","","Print a full line separator to `out`. `col_width` is a slice containing the width of each column",3,null],[11,"fmt","","",4,{"inputs":[{"name":"tableformat"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"tableformat"}],"output":{"name":"tableformat"}}],[11,"new","","Create a new TableFormat.",4,{"inputs":[{"name":"tableformat"},{"name":"char"},{"name":"option"},{"name":"option"}],"output":{"name":"tableformat"}}],[11,"print_line_separator","","Print a full line separator to `out`. `col_width` is a slice containing the width of each column",4,null],[11,"print_title_separator","","Print a full title separator to `out`. `col_width` is a slice containing the width of each column",4,null],[11,"print_column_separator","","Print a column separator to `out`",4,{"inputs":[{"name":"tableformat"},{"name":"t"}],"output":{"name":"result"}}],[11,"fmt","prettytable","",5,{"inputs":[{"name":"table"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"table"}],"output":{"name":"table"}}],[11,"new","","Create an empty table",5,{"inputs":[{"name":"table"}],"output":{"name":"table"}}],[11,"init","","Create a table initialized with ``rows`",5,{"inputs":[{"name":"table"},{"name":"vec"}],"output":{"name":"table"}}],[11,"set_format","","Change separators the table format",5,{"inputs":[{"name":"table"},{"name":"tableformat"}],"output":null}],[11,"get_column_num","","Compute and return the number of column",5,{"inputs":[{"name":"table"}],"output":{"name":"usize"}}],[11,"len","","Get the number of rows",5,{"inputs":[{"name":"table"}],"output":{"name":"usize"}}],[11,"set_titles","","Set the optional title lines",5,{"inputs":[{"name":"table"},{"name":"row"}],"output":null}],[11,"unset_titles","","Unset the title line",5,{"inputs":[{"name":"table"}],"output":null}],[11,"get_mut_row","","Get a mutable reference to a row",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"option"}}],[11,"get_row","","Get an immutable reference to a row",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"option"}}],[11,"add_row","","Append a row in the table, transferring ownership of this row to the table\nand returning a mutable reference to the row",5,{"inputs":[{"name":"table"},{"name":"row"}],"output":{"name":"row"}}],[11,"add_empty_row","","Append an empty row in the table. Return a mutable reference to this new row.",5,{"inputs":[{"name":"table"}],"output":{"name":"row"}}],[11,"insert_row","","Insert `row` at the position `index`, and return a mutable reference to this row.\nIf index is higher than current numbers of rows, `row` is appended at the end of the table",5,{"inputs":[{"name":"table"},{"name":"usize"},{"name":"row"}],"output":{"name":"row"}}],[11,"set_element","","Modify a single element in the table",5,{"inputs":[{"name":"table"},{"name":"str"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"remove_row","","Remove the row at position `index`. Silently skip if the row does not exist",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":null}],[11,"get_column_width","","Get the width of the column at position `col_idx`.\nReturn 0 if the column does not exists;",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"get_all_column_width","","Get the width of all columns, and return a slice\nwith the result for each column",5,{"inputs":[{"name":"table"}],"output":{"name":"vec"}}],[11,"column_iter","","Return an iterator over the immutable cells of the column specified by `column`",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"columniter"}}],[11,"column_iter_mut","","Return an iterator over the mutable cells of the column specified by `column`",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"columnitermut"}}],[11,"print","","Print the table to `out`",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"result"}}],[11,"print_term","","Print the table to terminal `out`, applying styles when needed",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"result"}}],[11,"printstd","","Print the table to standard output\n# Panic\nPanic if writing to standard output fails",5,{"inputs":[{"name":"table"}],"output":null}],[11,"fmt","","",5,{"inputs":[{"name":"table"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_iter","","",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"table"}}],[11,"from","","",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"table"}}],[11,"next","","",6,{"inputs":[{"name":"columniter"}],"output":{"name":"option"}}],[11,"next","","",7,{"inputs":[{"name":"columnitermut"}],"output":{"name":"option"}}],[14,"cell!","","This macro simplifies `Cell` creation",null,null],[14,"row!","","This macro simplifies `Row` creation",null,null],[14,"table!","","Create a table filled with some values",null,null],[14,"ptable!","","Create a table with `table!` macro, print it to standard output, then return this table for future usage.",null,null]],"paths":[[3,"Cell"],[3,"Row"],[4,"Align"],[3,"LineSeparator"],[3,"TableFormat"],[3,"Table"],[3,"ColumnIter"],[3,"ColumnIterMut"]]};
searchIndex['term'] = {"items":[[0,"","term","Terminal formatting library.",null,null],[4,"Attr","","Terminal attributes for use with term.attr().",null,null],[13,"Bold","","Bold (or possibly bright) mode",0,null],[13,"Dim","","Dim mode, also called faint or half-bright. Often not supported",0,null],[13,"Italic","","Italics mode. Often not supported",0,null],[13,"Underline","","Underline mode",0,null],[13,"Blink","","Blink mode",0,null],[13,"Standout","","Standout mode. Often implemented as Reverse, sometimes coupled with Bold",0,null],[13,"Reverse","","Reverse mode, inverts the foreground and background colors",0,null],[13,"Secure","","Secure mode, also called invis mode. Hides the printed text",0,null],[13,"ForegroundColor","","Convenience attribute to set the foreground color",0,null],[13,"BackgroundColor","","Convenience attribute to set the background color",0,null],[5,"stdout","","Return a Terminal wrapping stdout, or None if a terminal couldn't be\nopened.",null,{"inputs":[],"output":{"name":"option"}}],[5,"stderr","","Return a Terminal wrapping stderr, or None if a terminal couldn't be\nopened.",null,{"inputs":[],"output":{"name":"option"}}],[0,"terminfo","","Terminfo database interface.",null,null],[3,"TermInfo","term::terminfo","A parsed terminfo database entry.",null,null],[12,"names","","Names for the terminal",1,null],[12,"bools","","Map of capability name to boolean value",1,null],[12,"numbers","","Map of capability name to numeric value",1,null],[12,"strings","","Map of capability name to raw (unexpanded) string",1,null],[3,"TerminfoTerminal","","A Terminal that knows how many colors it supports, with a reference to its\nparsed Terminfo database record.",null,null],[4,"Error","","A terminfo creation error.",null,null],[13,"TermUnset","","TermUnset Indicates that the environment doesn't include enough information to find\nthe terminfo entry.",2,null],[13,"MalformedTerminfo","","MalformedTerminfo indicates that parsing the terminfo entry failed.",2,null],[13,"IoError","","io::Error forwards any io::Errors encountered when finding or reading the terminfo entry.",2,null],[0,"searcher","","ncurses-compatible database discovery",null,null],[5,"get_dbpath_for_term","term::terminfo::searcher","Return path to database entry for `term`",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[0,"parser","term::terminfo","TermInfo format parsing.\nncurses-compatible compiled terminfo format parsing (term(5))",null,null],[0,"compiled","term::terminfo::parser","ncurses-compatible compiled terminfo format parsing (term(5))",null,null],[5,"parse","term::terminfo::parser::compiled","Parse a compiled terminfo entry, using long capability names if `longnames`\nis true",null,{"inputs":[{"name":"read"},{"name":"bool"}],"output":{"name":"result"}}],[5,"msys_terminfo","","Create a dummy TermInfo struct for msys terminals",null,{"inputs":[],"output":{"name":"terminfo"}}],[7,"boolfnames","","",null,null],[7,"boolnames","","",null,null],[7,"numfnames","","",null,null],[7,"numnames","","",null,null],[7,"stringfnames","","",null,null],[7,"stringnames","","",null,null],[0,"parm","term::terminfo","Parameterized string expansion",null,null],[3,"Variables","term::terminfo::parm","Container for static and dynamic variable arrays",null,null],[4,"Param","","Types of parameters a capability can use",null,null],[13,"Words","","",3,null],[13,"Number","","",3,null],[5,"expand","","Expand a parameterized capability",null,null],[11,"clone","","",3,{"inputs":[{"name":"param"}],"output":{"name":"param"}}],[11,"new","","Return a new zero-initialized Variables",4,{"inputs":[{"name":"variables"}],"output":{"name":"variables"}}],[11,"fmt","term::terminfo","",1,{"inputs":[{"name":"terminfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_env","","Create a TermInfo based on current environment.",1,{"inputs":[{"name":"terminfo"}],"output":{"name":"result"}}],[11,"from_name","","Create a TermInfo for the named terminal.",1,{"inputs":[{"name":"terminfo"},{"name":"str"}],"output":{"name":"result"}}],[11,"from_path","","Parse the given TermInfo.",1,{"inputs":[{"name":"terminfo"},{"name":"path"}],"output":{"name":"result"}}],[11,"fg","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"color"}],"output":{"name":"result"}}],[11,"bg","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"color"}],"output":{"name":"result"}}],[11,"attr","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"attr"}],"output":{"name":"result"}}],[11,"supports_attr","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"reset","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[11,"cursor_up","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[11,"delete_line","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[11,"carriage_return","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[11,"get_ref","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"get_mut","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"into_inner","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"new_with_terminfo","","Create a new TerminfoTerminal with the given TermInfo and Write.",5,{"inputs":[{"name":"terminfoterminal"},{"name":"t"},{"name":"terminfo"}],"output":{"name":"terminfoterminal"}}],[11,"new","","Create a new TerminfoTerminal for the current environment with the given Write.",5,{"inputs":[{"name":"terminfoterminal"},{"name":"t"}],"output":{"name":"option"}}],[11,"write","","",5,null],[11,"flush","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[0,"color","term","Terminal color definitions",null,null],[6,"Color","term::color","Number for a terminal color",null,null],[17,"BLACK","","",null,null],[17,"RED","","",null,null],[17,"GREEN","","",null,null],[17,"YELLOW","","",null,null],[17,"BLUE","","",null,null],[17,"MAGENTA","","",null,null],[17,"CYAN","","",null,null],[17,"WHITE","","",null,null],[17,"BRIGHT_BLACK","","",null,null],[17,"BRIGHT_RED","","",null,null],[17,"BRIGHT_GREEN","","",null,null],[17,"BRIGHT_YELLOW","","",null,null],[17,"BRIGHT_BLUE","","",null,null],[17,"BRIGHT_MAGENTA","","",null,null],[17,"BRIGHT_CYAN","","",null,null],[17,"BRIGHT_WHITE","","",null,null],[6,"StdoutTerminal","term","Alias for stdout terminals.",null,null],[6,"StderrTerminal","","Alias for stderr terminals.",null,null],[8,"Terminal","","A terminal with similar capabilities to an ANSI Terminal\n(foreground/background colors etc).",null,null],[16,"Output","","The terminal's output writer type.",6,null],[10,"fg","","Sets the foreground color to the given color.",6,{"inputs":[{"name":"terminal"},{"name":"color"}],"output":{"name":"result"}}],[10,"bg","","Sets the background color to the given color.",6,{"inputs":[{"name":"terminal"},{"name":"color"}],"output":{"name":"result"}}],[10,"attr","","Sets the given terminal attribute, if supported.  Returns `Ok(true)`\nif the attribute was supported, `Ok(false)` otherwise, and `Err(e)` if\nthere was an I/O error.",6,{"inputs":[{"name":"terminal"},{"name":"attr"}],"output":{"name":"result"}}],[10,"supports_attr","","Returns whether the given terminal attribute is supported.",6,{"inputs":[{"name":"terminal"},{"name":"attr"}],"output":{"name":"bool"}}],[10,"reset","","Resets all terminal attributes and colors to their defaults.",6,{"inputs":[{"name":"terminal"}],"output":{"name":"result"}}],[10,"cursor_up","","Moves the cursor up one line.",6,{"inputs":[{"name":"terminal"}],"output":{"name":"result"}}],[10,"delete_line","","Deletes the text from the cursor location to the end of the line.",6,{"inputs":[{"name":"terminal"}],"output":{"name":"result"}}],[10,"carriage_return","","Moves the cursor to the left edge of the current line.",6,{"inputs":[{"name":"terminal"}],"output":{"name":"result"}}],[10,"get_ref","","Gets an immutable reference to the stream inside",6,{"inputs":[{"name":"terminal"}],"output":{"name":"output"}}],[10,"get_mut","","Gets a mutable reference to the stream inside",6,{"inputs":[{"name":"terminal"}],"output":{"name":"output"}}],[10,"into_inner","","Returns the contained stream, destroying the `Terminal`",6,{"inputs":[{"name":"terminal"}],"output":{"name":"output"}}],[11,"clone","","",0,{"inputs":[{"name":"attr"}],"output":{"name":"attr"}}],[11,"eq","","",0,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"attr"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"Attr"],[3,"TermInfo"],[4,"Error"],[4,"Param"],[3,"Variables"],[3,"TerminfoTerminal"],[8,"Terminal"]]};
searchIndex['kernel32'] = {"items":[],"paths":[]};
searchIndex['winapi'] = {"items":[],"paths":[]};
searchIndex['unicode_width'] = {"items":[[0,"","unicode_width","Determine displayed width of `char` and `str` types according to\n[Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/)\nrules.",null,null],[17,"UNICODE_VERSION","","The version of [Unicode](http://www.unicode.org/)\nthat this version of unicode-width is based on.",null,null],[8,"UnicodeWidthChar","","Methods for determining displayed width of Unicode characters.",null,null],[10,"width","","Returns the character's displayed width in columns, or `None` if the\ncharacter is a control character other than `'\\x00'`.",0,{"inputs":[{"name":"unicodewidthchar"}],"output":{"name":"option"}}],[10,"width_cjk","","Returns the character's displayed width in columns, or `None` if the\ncharacter is a control character other than `'\\x00'`.",0,{"inputs":[{"name":"unicodewidthchar"}],"output":{"name":"option"}}],[8,"UnicodeWidthStr","","Methods for determining displayed width of Unicode strings.",null,null],[10,"width","","Returns the string's displayed width in columns.",1,{"inputs":[{"name":"unicodewidthstr"}],"output":{"name":"usize"}}],[10,"width_cjk","","Returns the string's displayed width in columns.",1,{"inputs":[{"name":"unicodewidthstr"}],"output":{"name":"usize"}}]],"paths":[[8,"UnicodeWidthChar"],[8,"UnicodeWidthStr"]]};
initSearch(searchIndex);
