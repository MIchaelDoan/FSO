```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    actvate server
    server -->>browser: html
    deactivate server

    Note right of browser: Browser begins executing javascript fetched fromt the server
    

```