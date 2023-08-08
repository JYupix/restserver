const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  //   const query = req.query;
  //----------------------------------------------------------------//
  //   http://localhost:8080/api/usuarios?q=hola&nombre=fernando&apikey=1234567890
  //   const { q, nombre, apikey } = req.query;
  //----------------------------------------------------------------//
  //   http://localhost:8080/api/usuarios?q=hola&apikey=1234567890
  //   const { q, nombre = "No name", apikey } = req.query;
  //----------------------------------------------------------------//
  //   http://localhost:8080/api/usuarios?q=hola&page=1&limit=10
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - usuariosGet",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  //   const body = req.body;
  //   res.json({
  //     msg: "post API - usuariosPost",
  //     body,
  //   });
  //-----------------------------------//
  const { nombre, edad } = req.body;

  //   http://localhost:8080/api/usuarios
  res.json({
    msg: "post API - usuariosPost",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  //   http://localhost:8080/api/usuarios/10
  res.json({
    msg: "put API - usuariosPut",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
