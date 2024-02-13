"""Welcome to Reflex!."""

from readCSV import styles

# Import all the pages.
from readCSV.pages import *
from readCSV.models import *

import reflex as rx


class State(rx.State):
    """Define empty state to allow access to rx.State.router."""


# Create the app.
app = rx.App(style=styles.base_style)
