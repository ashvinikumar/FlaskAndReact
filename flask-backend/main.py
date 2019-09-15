import flask

app = flask.Flask("__main__")

@app.route("/")
def my_index():
    return flask.render_template("index.html", message="Hello World!! from Flask to React")

app.run(debug=True)