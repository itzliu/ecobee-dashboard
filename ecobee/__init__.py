from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
	
	app = Flask(__name__)

	app.config['SECRET_KEY'] = 'thatsthesecret'
	app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/ecobee'
	app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://localhost/ecobee"
	app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

	db.init_app(app)

	with app.app_context():
		db.create_all()

	from ecobee.main.routes import main

	app.register_blueprint(main)

	return app
