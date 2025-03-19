const error = {
  e404: (req, res) => {
    res.status(404).json({
      title: "Error 404 Not Found",
      message: "El recurso que estás buscando no existe.",
    });
  },
}

export default error