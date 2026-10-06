- multiple devices with mutliple device width-> when design for all of your screen devices then it is know and `responsive design`

- Two types of responsive design
  - Desktop first responsive design
  - Mobile first responsive design

css ->

- desktop -> if my screen width >1200px
  desktop styling
- tab -> if screen width >700px
  tablet styling

- mobile -> id screen with > 450px
  mobile styling

  IF marks >= 1200
  desktop

  ELSE IF marks >= 700
  tablet

  ELSE IF marks >= 50
  wide mobile

  ELSE
  mobile

```css
@media (min-width:1200px){
     {

          h1{
/* styling */
          }
}
    @media (min-width :700px)
        /* tablet */
        {

          h1{
/* styling */
       }
        }

    @media (min-width:450px)
      /* small mobile */
      h1{
/* styling */
       }

    ELSE
        mobile
```
