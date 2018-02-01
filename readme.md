# Boilerform

<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/share.png" style="max-width: 100%" alt="The Boilerform logo" />

Boilerform is a little HTML and CSS boilerplate to take the pain away from working with forms.

By providing baseline BEM structured CSS and appropriate attributes on elements: Boilerform gives you a head start building forms in the best possible way with a view to being dropped into most projects. 

The idea was first thought-up by [@chriscoyier](https://twitter.com/chriscoyier) on [CSS Tricks](https://css-tricks.com/boilerform).

🌍 [https://boilerform.design](https://boilerform.design)


## Getting started
Boilerform is designed to be straight-forward to implement. In its most basic form, you can drop a CSS file into your head with the following snippet:

```html
<link rel="stylesheet" media="all" href="https://rawgit.com/hankchizljaw/boilerform/master/dist/css/boilerform.min.css?v=1.1.1" />
```

Then all you need to do is wrap your elements in a `.boilerform` wrapper. It could be something like this: 

```html
<div class="boilerform">
    <!-- Add all of your boilerform elements in here 👍🏼 -->
</div>
```

You can also take compiled CSS and HTML from the [dist directory](https://github.com/hankchizljaw/boilerform/tree/master/dist/) of this repository, if that's what you prefer.

If you want a bit more control, you can work with the [Sass](https://github.com/hankchizljaw/boilerform/tree/master/assets/scss) and [Pattern Library](https://github.com/hankchizljaw/boilerform/tree/master/pattern-library). This is where the source of Boilerform lives.

To compile assets, you can run the following commands in your terminal:

- `npm run watch` will compile your assets and watch for further changes
- `npm run build` will compile your assets into a production ready state in the `dist` directory

The pattern library is powered by [Astrum](http://astrum.nodividestudio.com/). You can find [detailed documentation here](https://github.com/NoDivide/Astrum).

## Validation interface

There's a basic validation interface available with Boilerform which extends the native HTML validation facility with a few visual tweaks. It also allows you to set custom validation messages by setting a data attribute on your input.

### Getting started 

First of all, you need the JavaScript in your project. You can either take the [source code](https://github.com/hankchizljaw/boilerform/blob/master/assets/js/modules/validation.js) and add to your project, or add the dist version to bottom of your page.

```html
<script src="https://rawgit.com/hankchizljaw/boilerform/master/dist/js/boilerform.min.js?v=1.1.1" async defer></script>
```

Now that you've got the script, it'll "just" work, as long as your elements have the `required` attribute, which will allow them to fire an `invalid` event. You'll also need to make sure your `<form>` elements either live in a `.boilerform` parent element or have the `.boilerform` class.

You can push it further by adding a custom message. To do so, add a `data-validation-message` attribute.

#### Example

```html
<input type="text" data-validation-message="A custom message" required />
```

This will show "A custom message" in the tooltip that shows when the field fails validation 👍🏼

---

Made with ❤️ by [HankChizlJaw](https://twitter.com/hankchizljaw).
