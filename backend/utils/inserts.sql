INSERT INTO `comprador` (`idComprador`, `nombreComprador`) VALUES
(1, 'Dwayne Johnson'),
(2, 'Under Taker');

INSERT INTO `TipoProducto` (`idTipoProducto`, `descripcionProducto`) VALUES
(1, 'Cinturón campeonato Lucha Violenta'),
(2, 'Silla plegable');

INSERT INTO `vendedor` (`numeroVendedor`, `nombreVendedor`) VALUES
(1, 'Cactus Jack'),
(2, 'Stone Cold Steve Austin');

INSERT INTO `Producto` (`numeroVendedor`, `idComprador`, `idTipoProducto`, `precioCompra`) VALUES
(1, 1, 1, 1000),
(2, 2, 2, 2000);