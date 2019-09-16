from flask import render_template, Flask

app = Flask("__main__")

@app.route("/")
def jinja_index():
    kwargs = {'some_string': "This is some string"}
    return render_template("jinja_template.html", **kwargs)


@app.route("/login")
def jinja_index():
    kwargs = {'some_string': "This is some string"}
    return render_template("jinja_template.html", **kwargs)


@app.route("/v2/")
def react_index():
    return render_template("index.html", message="Hello World!! from Flask to React")

app.run(debug=True)