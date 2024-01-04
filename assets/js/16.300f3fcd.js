(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{579:function(s,a,t){s.exports=t.p+"assets/img/image-20231227164354300.25f5c71b.png"},611:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#clangd-cmake"}},[s._v("Clangd-Cmake")])]),n("li",[n("a",{attrs:{href:"#clangd能解决所有场景吗"}},[s._v("Clangd能解决所有场景吗？")])]),n("li",[n("a",{attrs:{href:"#clang-format"}},[s._v("Clang-format")])]),n("li",[n("a",{attrs:{href:"#指定c-c-编译器版本"}},[s._v("指定C/C++编译器版本")])])])]),n("p"),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("vscode自带的C/C++工具实在是有些不友好，经常开发的时候找不到头文件，导致代码跳转和补全功能都有问题，于是乎决定抛弃Microsoft C/C++转向Clangd，配合clang-format来格式化代码。两者都是基于LLVM开发的插件，接下来让我看如何配置吧。")])]),n("p",[s._v("至于如何安装这些插件这里就不多做赘述，相信使用过vscode的同学都已经熟悉了，接下来我们第一步首先来写cmake文件来开启clangd的功能")]),s._v(" "),n("h3",{attrs:{id:"clangd-cmake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clangd-cmake"}},[s._v("#")]),s._v(" Clangd-Cmake")]),s._v(" "),n("p",[s._v("使用cmake来生成clangd需要的文件"),n("code",[s._v("compile-command.json")]),s._v("是很方便的，在最新的cmake版本中，我们可以直接打开一个配置项就ok了")]),s._v(" "),n("div",{staticClass:"language-cmake line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cmake"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cmake_minimum_required")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("VERSION")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("project")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unix-learning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("EXECUTABLE_OUTPUT_PATH")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置导出生成clangd需要编译命令的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_EXPORT_COMPILE_COMMANDS")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("ON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这个文件是这样子的")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"directory"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/unix-learn/build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/gcc  -I/usr/src/linux-headers-5.4.0-144/include -I/opt/unix-learn -g -o CMakeFiles/container_of.dir/container_of.c.o -c /opt/unix-learn/container_of.c"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"file"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/unix-learn/container_of.c"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ......\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("其中cmke配置的头文件路径会在command属性中看到，也就是"),n("code",[s._v("-I/usr/src/linux-headers-5.4.0-144/include -I/opt/unix-learn")]),s._v("这样当我们打开"),n("code",[s._v("container_of.c")]),s._v("这个文件的时候，就能直接点击进所有的头文件啦！")]),s._v(" "),n("h3",{attrs:{id:"clangd能解决所有场景吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clangd能解决所有场景吗"}},[s._v("#")]),s._v(" Clangd能解决所有场景吗？")]),s._v(" "),n("p",[s._v("**但是这样真的可以解决我们所有C语言开发的场景吗？**其实不然，比如作者想在这个项目模块底下来写一些内核驱动程序，我们知道cmake来编译内核程序其实是很不方便的，但是整个项目却又要使用cmake来管理。我们可以来看一下如果我们使用cmake来编译内核程序，一般会如何写。")]),s._v(" "),n("div",{staticClass:"language-cmake line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cmake"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MODULE_NAME kexamples"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_definitions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-D__KERNEL__ -DMODULE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KSOURCE_FILES\n    kernels.c\n    rtnl.c\n    genl.c\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("find_path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        KERNEL_HEADERS_DIR\n        include/linux/user.h\n        PATHS /usr/src/kernels/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KERNEL_RELEASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KERNEL_HEADERS_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("STATUS "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kernel header dir '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("KERNEL_HEADERS_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('/include"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include_directories")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KERNEL_HEADERS_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endif")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KERNEL_HEADERS_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生成Kbuild文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get_filename_component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KO_FILENAME_WE "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("MODULE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" NAME_WE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KBUILD_CONTEXT "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"obj-m := '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("KO_FILENAME_WE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(".o\\n"),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("KO_FILENAME_WE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('-objs = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SOURCE_FILE "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KSOURCE_FILES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FIND "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("FILE_CONTENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module_init("')]),s._v(" KERNEL_INIT_INDEX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get_filename_component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FILENAME_WE "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("SOURCE_FILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" NAME_WE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KBUILD_CONTEXT "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("KBUILD_CONTEXT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("FILENAME_WE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('.o "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endforeach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("FILE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WRITE "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/Kbuild "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KBUILD_CONTEXT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忽略内核签名校验")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KNAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("MODULE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".ko"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KBUILD_CMD make -C "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KERNEL_HEADERS_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" modules M="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" CONFIG_MODULE_SIG=n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KBUILD_CMD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_custom_command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OUTPUT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    COMMAND "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KBUILD_CMD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("WORKING_DIRECTORY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("DEPENDS")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("SOURCE_FILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    VERBATIM\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_custom_target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("MODULE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" ALL "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("DEPENDS")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_custom_command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    TARGET "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("MODULE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    POST_BUILD\n    COMMAND "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_COMMAND")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" -E copy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("EXECUTABLE_OUTPUT_PATH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    COMMAND make -C "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KERNEL_HEADERS_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" M="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" clean\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br")])]),n("p",[s._v("这是作者一个内核模块下的Cmake文件，在主cmake文件中配置包含子目录:")]),s._v(" "),n("div",{staticClass:"language-cmake line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cmake"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_subdirectory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kernels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当我们使用cmake来进行编译的时候，我们会发现，在kernels这个目录下的源文件，并没有在"),n("code",[s._v("compile-command.json")]),s._v("这个文件中生成，这是为什么呢？其实是因为内核模块的编译，我们需要借助"),n("strong",[s._v("make module")]),s._v("命令，"),n("strong",[s._v("cmake中也是对这些命令进行一些拼装而已，这些源文件并没有交给cmake来编译管理")]),s._v("。当让clangd也就生成不了这些文件的配置项了。要解决这个问题其实也很简单，只不过不是很优雅,只需要将这些内核模块的源文件交给cmake来编译就好了")]),s._v(" "),n("div",{staticClass:"language-cmake line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cmake"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_library")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("noting "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("SHARED")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("KSOURCE_FILES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("之所以这么说，是因为cmake中的指令add_library并不可以将这些内核模块的源文件链接到一个动态库中，所有的内核模块源文件必须使用make来编译，所以这里会有一些错误，为了防止这个指令不影响上面的cmake指令，我们直接给他放到最后，这样就可以生成对应内核模块源文件的"),n("code",[s._v("compile-command.json")]),s._v("配置项了！")]),s._v(" "),n("h3",{attrs:{id:"clang-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clang-format"}},[s._v("#")]),s._v(" Clang-format")]),s._v(" "),n("p",[s._v("我们禁用了Microsoft C/C++相关的插件后，代码格式化就会成为默认的了，我们再使用这个插件来配置一下代码格式化。")]),s._v(" "),n("p",[s._v("首先在项目根目录执行命令生成google style的配置文件并且重定向到"),n("code",[s._v(".clang-format")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("clang-format -style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("google -dump-config "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .clang-format\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里配置比较繁杂，这里不做过多阐述，直接贴上作者的配置文件")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BasedOnStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Google\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Language")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Cpp\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AccessModifierOffset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("-4")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AllowAllConstructorInitializersOnNextLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AllowShortCaseLabelsOnASingleLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AlwaysBreakBeforeMultilineStrings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BraceWrapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterControlStatement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Always\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterEnum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterFunction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterStruct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterUnion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("AfterExternBlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BeforeCatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BeforeElse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BreakBeforeBraces")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Custom\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CommentPragmas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^ NOLINT:"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("IndentWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PointerAlignment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Right\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SortIncludes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SortUsingDeclarations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SpacesBeforeTrailingComments")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SpacesInContainerLiterals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Standard")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Cpp11\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TabWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("另外还有一个小技巧也是比较常用的，比如我们有些地方的文字不想让"),n("code",[s._v("clang-format")]),s._v("来格式化，比如一些注释啊什么的，如果我们对对齐的注释被格式化了就会很难看，这个时候我们可以用"),n("code",[s._v("// clang-format off/on")]),s._v("来禁用/开启 "),n("code",[s._v("clang-format")]),s._v("格式化功能，例如:")]),s._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// clang-format off")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * Generic Netlink uses the standard Netlink subsystem as a transport layer\n * which means that the foundation of the Generic Netlink message is the\n * standard Netlink message format - the only difference is the inclusion of a\n * Generic Netlink message header. The format of the message is defined as shown\n * below:\n  0                   1                   2                   3\n  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n |                Netlink message header (nlmsghdr)              |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n |           Generic Netlink message header (genlmsghdr)         |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-------\n |             Optional user specific message header             |      |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+      |->nlattrs\n |           Optional Generic Netlink message payload            |      |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-------\n*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// clang-format on")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"指定c-c-编译器版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指定c-c-编译器版本"}},[s._v("#")]),s._v(" 指定C/C++编译器版本")]),s._v(" "),n("p",[s._v("众所周知vscode知识一个编辑器、他并不内置编译器，我们使用clangd插件，其实他内置了clang这个编译器，如果我们想设置vscode的风格为C语言或者C++语言，应该怎么配置？博主这里被卡了好久，查找了许多资料。")]),s._v(" "),n("p",[s._v("首先在macos上，默认使用的C++的 "),n("code",[s._v("-std=c++03")]),s._v("选项，C语言是"),n("code",[s._v("C99")]),s._v(",我们目前开发C或者C++程序，都是使用很高的版本，比如我平时开发使用"),n("code",[s._v("C11")]),s._v("、"),n("code",[s._v("C++")]),s._v("也是"),n("code",[s._v("11")]),s._v("，另外C++的版本有时甚至已经用到了"),n("code",[s._v("C++20")]),s._v("。所以这里的默认配置显然不符合了。这里直接贴出来配置的位置：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(579),alt:"image-20231227164354300"}})]),s._v(" "),n("p",[s._v("这里的配置可以参考https://clang.llvm.org/docs/CommandGuide/clang.html#cmdoption-x.")]),s._v(" "),n("p",[s._v("另外如果仅仅配置了这里，很多人都没有什么问题了，但是博主的环境很会给我找事干，我这里配置好之后，仍然不能使用"),n("code",[s._v("C++11")]),s._v("的语法，我也不卖关子了，我这里是因为还需要指定clang的cxx选项。")]),s._v(" "),n("ol",[n("li",[s._v("shit+command+p打开"),n("code",[s._v("User Setting")])]),s._v(" "),n("li",[s._v("增加配置"),n("code",[s._v('"clang.cxxflags": ["-std=c++11"]')])]),s._v(" "),n("li",[s._v("shit+command+p "),n("code",[s._v("restart language server")])]),s._v(" "),n("li",[s._v("可以愉快的编码了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);