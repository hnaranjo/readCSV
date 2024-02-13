import reflex as rx


class Register(rx.Model, table=True):
    documentType: str
    documentId: str
    lastName: str
    secondLastName: str
    firstName: str
    secondFirstName: str
