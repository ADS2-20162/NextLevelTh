app
	.factory('ApiUser', function($resource, config_auths){

		var url = config_auths.authsUrl;
		var url1 = config_auths.clegUrl;
		var url2 = config_auths.rlegUrl;
		var url3 = config_auths.cgenUrl;
		var url4 = config_auths.catUrl;
        var url5 = config_auths.gperfilUrl;
		var urlD = config_auths.gdataUrl;

		return{
			Persona: $resource(url4 +"personas/:id/", {'id': '@id'},{
				"update": {method: 'PUT'},
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
			}),
            
            User: $resource(url +"users/:id/", {'id': '@id'},{
				"update": {method: 'PUT'},
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
			}), 
            
            PhotoUser: $resource(url +"photousers/:id/", {'id': '@id'},{
				"update": { 
                    method: 'PUT' ,
                    transformRequest: 
                        function transformImageRequest(data) {
                            if (data === undefined)
                                return data;                            
                            var fd = new FormData();
                            angular.forEach(data, function(value, key) {
                                if (value instanceof FileList) {
                                    if (value.length == 1) {
                                        fd.append(key, value[0]);
                                    } else {
                                        angular.forEach(value, function(file, index) {
                                            fd.append(key + '_' + index, file);
                                        });
                                    }
                                } else {
                                    fd.append(key, value);
                                }
                            });

                            return fd;
                        } ,
                    headers: { 'Content-Type': undefined }
                },
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
			}), 

			EstadoCivil: $resource(url4 +"estadoCiviles/:id/", {'id': '@id'},{
				"update": {method: 'PUT'},
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
			}),

			Nacionalidad: $resource(url4 +"nacionalidades/:id/", {'id': '@id'},{
				"update": {method: 'PUT'},
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
			}),

			Item: $resource(url3 + "items/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list":{
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};

	                    return { results: results, options: options };
	                }
	            },
	            "options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            }
	        }),
            
            SubItem: $resource(url3 + "subItems/:id/", { 'id': '@id' }, {
	            "update": { method: 'PUT' },
	            "list": { method: 'GET', isArray: true }
	        }),

	        Seccion: $resource(url3 + "seccions/:id/", { 'id': '@id' }, {
	            "update": { method: 'PUT' },
	            "list": { method: 'GET', isArray: true }
            }),

            ElementoCampoRegistro: $resource(url2 + "elementoCampoRegistro/:id/", { 'id': '@id' },{
	            "update": {method: 'PUT'},
				"list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            } 
            }),


            ElementoCampoPredefinidoRegistro: $resource(url2 + "elementoCampoPredefinidoRegistro/:id/", { 'id': '@id' },{
	            "update": { method: 'PUT' },
	            "list": { method: 'GET', isArray: true }
            }), 

	        ElementoCampo: $resource(url2 + "elementoCampos/:id/", { 'id': '@id' }, {
	            "update": { method: 'PUT' },
                "list": {
					method: 'GET', 
					isArray: false,
					transformResponse: function(r){
						var results = [];
	                    var options = {};
	                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
	                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
	                    "previous":null,"page_size":1,"next":null};


	                    return { results: results, options: options };
					}
				},
				"options": {
	                method: 'OPTIONS',
	                isArray: false,
	                transformResponse: function(r) {
	                    return angular.fromJson(r).actions.POST;
	                }
	            } 
            }),

	        ElementoCampoPredefinido: $resource(url2 + "elementoCampoPredefinidos/:id/", { 'id': '@id' }, {
	            "update": { method: 'PUT' },
	            "list": { method: 'GET', isArray: true }
            }), 
            
            Perfil: $resource(url5 + "perfiles/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        AreaPerfil: $resource(url5 + "areaperfiles/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        EscalaDimension: $resource(url5 + "escaladimensiones/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        CompetenciaPerfil: $resource(url5 + "competenciaperfiles/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        SubareaPerfil: $resource(url5 + "subareaperfiles/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        Dimension: $resource(url5 + "dimensiones/:id/", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
	        Registro: $resource(urlD + "registros/:id", {'id': '@id'}, {
	            "update": {method: 'PUT'},
	            "list": {method: 'GET', isArray: true},
	        }),
		};
	});