# Run a GET request with cookies section:
GET https://example.org/index.html
[Cookies]
theme: light
sessionToken: abc123

# Run the same GET request with a header:
GET https://example.org/index.html
Cookie: theme=light; sessionToken=abc123
