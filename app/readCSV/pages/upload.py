"""The upload page."""

from readCSV.templates import template

import reflex as rx


@template(route="/upload", title="Upload")
def upload() -> rx.Component:

    return rx.vstack(
        rx.heading("Subir archivos", font_size="3em"),
        rx.text("Bienvenido a la aplicación!"),
        rx.text(
            "You can edit this page in ",
            rx.code("{your_app}/pages/upload.py"),
        ),
        rx.upload(
            rx.text(
                "Ubique su archivo aquí"
            ),
            border="1px dotted rgb(107,99,246)",
            padding="5em",
        )
    )
