# Types of Selector

**First 5 are basic and secon half are more advanced**

1. Universal Selector
    ```
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    ```
2. Type Selector
    ```
    p{
        font-size:16px;
        margin-bottom:10px;
        /* margin : 10px 15px 10px 15px  */  
        /* padding : 1px 5px 1px 5px  */  
    }
    ```
3. class Selector
    ```
    .highlight{
        background-color:#21a2c9;
    }
    ```
4. ID Selector
    ```
    #header{
        background-color: #860303;
    }
    ```
5. Attributed Selector

    ```
    input[type = "text"]{
        border = 2px solid #21a2c9;
    }
    ```

**Advanced section**

6. Descendant Selector

    ```
    article p{
        font-style : italic;
        background-color : #1a1a1a;
        color : white;
        padding: 12px;
    }
    ```

7. Child Selector
8. Adjacent sibling selector
9. General sibling selector

10. Pseudo-class selector
    it allows you to style elements dynamically based on their state or interaction without requiring additional classes or JavaScript
    
    ```
    a:hover{
        background-color : #14a50e;
        text-decoration: none;
        color: #1a1a1a;
        padding: 5px;
        margin: 2px;
    }
    ```

11. Pseudo-element Selector
12. Grouping Selector
