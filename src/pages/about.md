---
layout: default
title: About
permalink: about/
render: dynamic
---

This is a base theme for the Material Bliss Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/), as well as this themes homepage: [Material Bliss](http://www.github.com/InsidiousMind/material-bliss-jekyll-theme)

You can find the source code for the Jekyll Material Bliss Theme at:
{% include icon-github.html username="InsidiousMind" %} /
[material-bliss](https://github.com/InsidiousMind/material-bliss-jekyll-theme)

You can find the source code for Jekyll at
{% include icon-github.html username="jekyll" %} /
[jekyll](https://github.com/jekyll/jekyll)

Here's a demo of syntax highlighting!

{% highlight zsh %}
demo_mod1_generator() {
  local mod="$1" ice="$2"

  # Content, no hyper-links
  reply=( "Hello World from ${ZUI[YELLOW]}ZUI${ZUI[COLOR_END]}! Module $mod, instance $ice." )

  # Non-selectable lines   Hops to jump with [ and ]   Local anchors
  reply2=( )               reply3=( 1 )                reply4=( )
}
{% endhighlight %}


```
#!/usr/bin/python3

def something:
  print("Hello World!")

something
```

Even though it's built with React and Jekyll, you can still use liquid tags in you're markdown exactly as you would normally! for example, if you look at the sourcecode for this about page, you will find I use this liquid in this very page


The page can render either dynamically or statically. This about page is rendered dynamically, all that's required for a dynamic render is putting
```
---
render: dynamic
---
```
in your front matter. What this does is spit out a corresponding JSON file of your dynamic page at the url. put 'About.json' in the url to see it!


If you want a static render, you don't need to include anything for 'render'
