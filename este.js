<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400&amp;display=swap" rel="stylesheet" />
	<style type="text/css">.approved-list .portlet-title {
            position: relative;
        }

        .approved-list h2 {
            color: #54a2b6;
        }

        .approved-list .portlet-title .caption-subject {
            font-family: "Roboto Mono", monospace;
        }

        div#cabecalho {
            padding: 10px;
            /* aqui entra as propriedades da transparência, aqui eu usei a cor Black */
            background: rgb(0, 0, 0) transparent;
            background: rgba(0, 0, 0, 0.7);
            /* Para navegadores IE 5.5 - 7 */
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#000000);
            /* Para navegadores IE 8 */
            -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#000000)";
        }

        #cabecalho img {
            position: relative;
            width: 4%;
        }

        .approved-list label.control-label {
            font-family: "Open Sans";
            color: #3c4977;
            font-weight: 600;
            position: relative;
            top: 6px;
        }

        .approved-list h3 {
            font-family: "Open Sans";
            color: #3c4977;
            font-weight: bold;
        }

        .approved-list .portlet-body .form-body {
            position: relative;
            overflow: hidden;
        }

        .approved-list input,
        .approved-list select {
            outline: 0;
            border-width: 0 0 2px;
            border-color: #4c4c4c;
            border-radius: 0;
        }

        .approved-list input {
            background: rgba(0, 0, 0, 0.03);
        }

        .approved-list .form-body {
            background: rgb(255, 255, 255);
            background: linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, rgba(240, 243, 247, 1) 84%, rgba(228, 235, 239, 1) 84%, rgba(255, 255, 255, 1) 100%);
        }

        .btnSubirPlanilha {
            position: relative;
            left: 14px;
            background: #3c4977;
            color: white;
            border-radius: 10px;
        }

        table#tableDocumentsByDate td {
            cursor: pointer;
        }

        #templateDocumentsTable #docsTable_wrapper div {
            padding-bottom: 7px;
        }

        .label-sel-all {
            position: absolute;
            top: 35px;
            left: 9px;
            z-index: 10000000000000000000000000;
        }

        #templateDocumentsTable {
            margin-top: 10px;
        }

        body table#tableDocumentsByDate tr:hover {
            background: rgb(255, 255, 255);
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 255, 1) 46%, rgba(162, 162, 254, 1) 100%);
        }

        @media (min-width: 970px) {
            #form-fields {
                padding: 10px;
            }
        }

        .column--index {
            width: 5px !important;
            text-align: center;
        }

        .lote--title {
            margin-bottom: 15px;
        }

        .dataTables_info .select-info {
            display: none;
        }

        [data-view="modal-progresso"],
        .dialog--modal-progresso {
            z-index: 10050;
        }

        [data-view="modal-progresso"] [data-name="progressbar"] {
            margin-top: 20px;
        }

        [data-view="modal-progresso"] [data-name="progressLabel"] {
            font-weight: bold;
            text-shadow: 1px 1px 0 #fff;
        }
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script><!-- <script src="/bvreembolso/Autenticado/assets/global/scripts/autotable.js"></script> --><script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/2.3.4/jspdf.plugin.autotable.min.js"
        integrity="sha512-ikYs4ussJj9VQ/6Ec441EKkxiiNjPwvDrMiM5vSOUjzgkdivCsU8316CnO7LkQvlnxVR9DaBYVzZG6hlsZwWRA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
<div data-view="view.container">
<p><button class="open-modal btn btn-primary btn-lg" data-target="#myModal" data-toggle="modal" style="display: none" type="button">open modal</button></p>

<div aria-labelledby="myModalLabel" class="modal fade" id="myModal" role="dialog" tabindex="-1">
<div class="modal-dialog" role="document">
<div class="modal-content" style="position: relative">
<div class="modal-body" style="position: absolute; width: 100%">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" class="progress-bar-docs progress-bar" role="progressbar" style="
                                    position: absolute;
                                    width: 1%;
                                    top: 300px;
                                    height: 40px;
                                    padding: 10px;
                                ">1%</div>
</div>
</div>
</div>
</div>

<div class="portlet light bordered approved-list">
<div class="portlet-title">
<div id="cabecalho"><img alt="logo" src="/bvreembolso/Imagens/aparencia/customizado/LogoEllos.png" /></div>
</div>

<div class="portlet-body">
<div class="row">
<div class="col-sm-12">
<h2 class="lote--title">Lotes Finalizados</h2>

<p>Pesquise os Lotes Finalizados especificando as datas de intervalo:</p>
</div>

<div class="col-xs-12" data-view="view.pesquisar.documento" id="tableLotesLacrados">
<div class="row">
<div class="col-sm-3"><label class="control-label" for="initial-date">De: </label> <input class="form-control" id="initial-date" type="text" /></div>

<div class="col-sm-3"><label class="control-label" for="final-date">At&eacute;: </label> <input class="form-control final-date" id="final-date" type="text" /></div>

<div class="col-sm-3"><label>&nbsp;</label><button class="form-control btn btn-primary" id="btnPesquisarDocumentos" type="button">Pesquisar</button></div>
</div>
&nbsp;

<div class="row lotesLacrados" style="display:none;">
<div class="col-xs-12">
<div data-view="view.table.documents.documento.lacrados">
<fieldset><legend>Lotes Lacrados</legend>

<p>Verifique abaixo os Lotes que j&aacute; foram lacrados!!</p>
</fieldset>

<div class="row">
<div class="col-md-12">
<table class="table table-striped table-bordered lotesLacrados" id="lotesLacrados">
</table>
</div>
</div>
</div>
</div>
</div>

<div class="row">
<div class="col-xs-12">
<div data-view="view.table.documents.by.date">
<fieldset><legend>Tabela de lotes finalizados</legend>

<p>Clique no CPF/CNPJ selecionado para carregar os lotes deste:</p>
</fieldset>

<div class="row">
<div class="col-md-12">
<table class="table table-striped table-bordered" id="tableDocumentsByDate">
	<thead>
	</thead>
	<tbody>
	</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="col-xs-12" data-view="view.lacrar.lotes" hidden="">
<div class="row">
<div class="col-xs-3">
<div class="form-group"><label class="control-label">&nbsp;</label><button class="form-control btn btn-info save-doc" data-action="action.lacrar.lotes" type="button">Lacrar lotes</button></div>
</div>

<div class="col-xs-3">
<div class="form-group"><label class="control-label">&nbsp;</label><button class="form-control btn btn-info new-search" data-action="action.nova.pesquisa" type="button">Nova Pesquisa</button></div>
</div>
</div>

<div class="row">
<div class="col-xs-4">
<div class="form-group"><label class="control-label" for="cnpj">Insira o CPF ou CNPJ: </label> <input class="form-control" disabled="disabled" id="cnpj" type="text" /></div>
</div>

<div class="col-xs-4">
<div class="form-group"><label class="control-label" for="company">Empresa</label> <input class="form-control" disabled="disabled" id="company" type="text" /></div>
</div>

<div class="col-xs-4">
<div class="form-group"><label class="control-label" for="advance">Adiantamento</label> <input class="form-control" id="advance" type="text" /></div>
</div>
</div>

<div class="row">
<div class="col-sm-4">
<div class="form-group"><label class="control-label" for="request-type">Tipo de Solicita&ccedil;&atilde;o</label> <input class="form-control" disabled="disabled" id="request-type" type="text" /></div>
</div>

<div class="col-sm-4">
<div class="form-group"><label class="control-label" for="send-date">Data Envio</label> <input class="form-control" disabled="disabled" id="send-date" type="text" /></div>
</div>

<div class="col-sm-4">
<div class="form-group"><label class="control-label" for="total-value">Valor Total</label> <input class="form-control" disabled="disabled" id="total-value" type="number" value="0" /></div>
</div>
</div>
&nbsp;

<div class="row">
<div class="col-xs-12">
<fieldset><legend>Lotes filtrados por CPF/CNPJ</legend> <label class="label-sel-all" hidden=""> <input class="select-all" type="checkbox" /> Selecionar Todos </label></fieldset>

<div class="row">
<div class="col-md-12">
<table class="table table-striped table-bordered">
	<thead>
	</thead>
	<tbody>
	</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div data-view="modal-progresso" title="">
<div data-name="progressLabel">Progresso: 0%</div>

<div data-name="progressbar">&nbsp;</div>
</div>
</div>
<script>
        $(function () {
            const Formulario = (function () {

                //valor da chave gerada ao adicionar o tipo de reembolso la na lista do ECM
                const tipoReembolso = {
                    BV_Leasing_Nome: 'Banco BV S/A',
                    Banco_Votorantim: 'Banco Votorantim',
                    Banco_BvSA_definitivo: 'DEPOSITO JUDICIAL DEFINITIVO BANCO BV SA',
                    Banco_BvSA_Provisorio: 'DEPOSITO JUDICIAL PROVISORIO BANCO BV SA',

                };
                const empresaRazaoSocial = {
                    BV_Leasing_Razao_social: 'Banco BV S/A',
                };
                const empresaCNPJ = {
                    BV_Leasing_CNPJ: '01.858.774/0001-10'
                };

                const ENUM_SCRIPTS = {
                    CONSULTAR_DOCUMENTOS_POR_ATIVIDADE: 6,
                    PUBLICAR_DOCUMENTO: 7,
                    RESERVAR_DOCUMENTO: 8,
                    CRIAR_DOCUMENTO: 11,
                    INICAR_DOCUMENTO_FLUXO: 12,
                    ANEXAR_PDF_DOCUMENTO: 13,
                    INSERIR_LOTE_LACRADO: 19,
                };

                const store = {
                    listaTipoSolicitacao: [],
                    pendencias: [],
                    documentosFiltrados: {},
                    documento: null,
                    valorTotal: 0,
                    numeroBordero: 0,
                    documentoBorderoId: 0,
                    dataEnvio: '',
                    pdfNome: '',
                    pdfBinario: null,
                    documentosSelecionados: [],
                    documentosLacrados: [],
                    progressoDocumentos: {
                        total: 0,
                        current: 0
                    },
                };

                const $el = {
                    container: null,
                    views: {
                        tableDocumentsByDate: null,
                        viewTableDocumentsByDate: null,
                        viewPesquisarDocumento: null,
                        viewLacrarLotes: null,
                        viewModalProgresso: null,
                    },
                    inputs: {
                        inputInitialDate: null,
                        inputFinalDate: null,
                        inputCnpj: null,
                        inputTipoSolicitacao: null,
                        inputEmpresa: null,
                        inputDataEnvio: null,
                        inputValorTotal: null,
                        inputAdiantamento: null,
                    },
                    buttons: {
                        btnPesquisarDocumentos: null,
                        btnNovaPesquisa: null,
                        btnLacrarLotes: null,
                    },
                    dataTables: {
                        tableDocumentsByDate: null,
                        tableLacrarLotes: null
                    },
                    dialogContext: {
                        modalProgresso: null,
                    }
                };

                function init() {
                    registerElements(registerEvents);
                }

                function registerElements(callback) {
                    $el.container = $(document.body).find('[data-view="view.container"]');

                    $el.views.viewPesquisarDocumento = $el.container.find('[data-view="view.pesquisar.documento"]');
                    $el.views.viewTableDocumentsByDate = $el.container.find('[data-view="view.table.documents.by.date"]');
                    $el.views.viewLacrarLotes = $el.container.find('[data-view="view.lacrar.lotes"]');

                    $el.inputs.inputInitialDate = $el.container.find('#initial-date');
                    $el.inputs.inputFinalDate = $el.container.find('#final-date');

                    $el.inputs.inputCnpj = $el.views.viewLacrarLotes.find('#cnpj');
                    $el.inputs.inputTipoSolicitacao = $el.views.viewLacrarLotes.find('#request-type');
                    $el.inputs.inputEmpresa = $el.views.viewLacrarLotes.find('#company');
                    $el.inputs.inputDataEnvio = $el.views.viewLacrarLotes.find('#send-date');
                    $el.inputs.inputValorTotal = $el.views.viewLacrarLotes.find('#total-value');
                    $el.inputs.inputAdiantamento = $el.views.viewLacrarLotes.find('#advance');

                    $el.buttons.btnPesquisarDocumentos = $el.container.find('#btnPesquisarDocumentos');
                    $el.buttons.btnNovaPesquisa = $el.views.viewLacrarLotes.find('[data-action="action.nova.pesquisa"]');
                    $el.buttons.btnLacrarLotes = $el.views.viewLacrarLotes.find('[data-action="action.lacrar.lotes"]');

                    $el.viewModalProgresso = $el.container.find('[data-view="modal-progresso"]');

                    $el.dialogContext.modalProgresso = $el.viewModalProgresso.dialog({
                        autoOpen: false,
                        closeOnEscape: false,
                        resizable: false,
                        minHeight: 60,
                        modal: true,
                        classes: {
                            'ui-dialog': 'dialog--modal-progresso',
                            'ui-dialog-titlebar': 'hidden'
                        },
                    });

                    callback && callback();
                }

                function registerEvents() {

                    Ecm.InicializarDatepicker($el.inputs.inputInitialDate);
                    Ecm.InicializarDatepicker($el.inputs.inputFinalDate);

                    $el.buttons.btnPesquisarDocumentos.on('click', onClickPesquisarDocumentos);
                    $el.buttons.btnNovaPesquisa.on('click', onClickNovaPesquisa);
                    $el.buttons.btnLacrarLotes.on('click', onClickLacrarLotes);

                    configurarProgressBarPermissao();
                }

                function configurarProgressBarPermissao() {
                    var $progressBar = $el.viewModalProgresso.find('[data-name="progressbar"]');
                    var $label = $el.viewModalProgresso.find('[data-name="progressLabel"]');

                    $progressBar.progressbar({
                        value: false,
                        change: function () {
                            var value = $progressBar.progressbar('value');
                            $label.text('Progresso: ' + value + '%');
                        },
                        complete: function () {
                            $label.text('Salvo com sucesso!');
                        }
                    });
                }

                async function onClickPesquisarDocumentos(event) {
                    if (event && event.detail > 1) return;

                    try {
                        await validarDataPesquisa();

                        const lotesLacradosAtividade = await buscarLotesLacradosAtividade();
                        const lotesLacrados = await buscarLotesLacrados();

                        await ajaxGetDocumentosLotesFinalizados(lotesLacradosAtividade, lotesLacrados);

                    } catch (error) {
                        const msg = error.message || 'Erro ao pesquisar documentos';
                        Ecm.alertErro(error);
                    }
                }

                //busca lotes lacrados na versão antiga, onde era salvo no campo 7
                function buscarLotesLacradosAtividade(callback) {
                    return new Promise(function (resolve, reject) {
                        let url = 'integracao/select';

                        let query = 'select distinct'
                            + ' doc.id as DocumentoId, '
                            + ' docv.id as VersaoDocumento,'
                            + ' docv.documento_versao_status_id as Status,'
                            + ' docvcampo.valor_texto as Lotes'
                            + ' from documento doc'
                            + ' inner join DOCUMENTO_VERSAO docv on docv.documento_id = doc.id'
                            + ' inner join PROC_INSTANCIA pro on pro.documento_id = doc.id'
                            + ' inner join DOCUMENTO_VERSAO_CAMPO docvcampo on docvcampo.documento_versao_id = docv.id'
                            + ' where docv.documento_versao_status_id = 1'
                            + ' and pro.atividade_id = 2'
                            + ' and docvcampo.tipo_documental_id = 4'
                            + ' and docvcampo.tipo_documental_campo_id = 7'
                            + ' and doc.excluido = 0'
                            + ' and docvcampo.valor_texto is not null'
                            + '';

                        let parametros = {
                            connectionName: 'CONEXAO',
                            query: query,
                        };

                        Ecm.bloquearElemento(".approved-list");

                        Ecm.Api2.Post('integracao/select', parametros).done(function (response) {
                            Ecm.desbloquearElemento('.approved-list');

                            if (!Array.isArray(response)) {
                                resolve([]);
                                return;
                            }

                            const dataSource = [];

                            for (let index in response) {
                                const item = response[index];
                                let lotes = [];
                                try {
                                    lotes = JSON.parse(item.lotes);
                                } catch (error) {

                                }

                                for (let key in lotes) {
                                    const lote = lotes[key];
                                    dataSource.push(lote);
                                }
                            }

                            resolve(dataSource);

                        }).fail(function (error) {
                            Ecm.desbloquearElemento('.approved-list');
                            resolve([]);
                            console.warn(error);
                        });
                    });
                }

                function buscarLotesLacrados(callback) {
                    return new Promise(function (resolve, reject) {
                        const url = 'integracao/select';

                        const initialDate = $el.inputs.inputInitialDate.val();
                        const finalDate = $el.inputs.inputFinalDate.val();

                        const dataInicial = moment(initialDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
                        const dataFinal = moment(finalDate, 'DD/MM/YYYY').format('YYYY-MM-DD');

                        const query = `
                                            select
                                                id,
                                                documento_id as docId,
                                                documento_lacrado_id as docLacradoId,
                                                assessoria_prestador as assessoriaPrestador,
                                                numero_lote as lote,
                                                numero_lacre as lacre,
                                                valor_lote as valor,
                                                cpf_cnpj as cpfCnpj,
                                                tipo_solicitacao as tipoSolicitacao,
                                                data_envio as dataEnvio
                                            from dbo.LOTE_LACRADO_DLL
                                                where data_envio >= '${dataInicial} 00:00:00' and data_envio <= '${dataFinal} 23:59:59'
                                            order by id desc
                                        `;

                        const parametros = {
                            connectionName: 'CONEXAO',
                            query: query,
                        };

                        Ecm.bloquearElemento(".approved-list");

                        Ecm.Api2.Post('integracao/select', parametros).done(function (response) {
                            Ecm.desbloquearElemento('.approved-list');

                            if (!Array.isArray(response)) {
                                resolve([]);
                                return;
                            }

                            resolve(response);

                        }).fail(function (error) {
                            Ecm.desbloquearElemento('.approved-list');
                            resolve([]);
                            console.warn(error);
                        });
                    });
                }

                function onClickNovaPesquisa(event) {
                    if (event && event.detail > 1) return;

                    $el.views.viewLacrarLotes.slideUp(function () {
                        resetInputLacrarLotes();
                        initTableDespesaLote([], false);
                        initTableDocumentsByDate([]);

                        $el.views.viewPesquisarDocumento.slideDown();
                        $el.views.viewTableDocumentsByDate.slideDown();
                    });
                }

                function onClickLacrarLotes(event) {
                    if (event && event.detail > 1) return;
                    debugger;
                    validarLacreLotes().then(execLacrarLotes).catch(function (error) {
                        Ecm.alertErro(error || 'Não foi possivel realizar o lacre dos lotes selecionados!');
                    });
                }

                function validarDataPesquisa() {
                    return new Promise(function (resolve, reject) {
                        let initialDate = $el.inputs.inputInitialDate.val();
                        let finalDate = $el.inputs.inputFinalDate.val();

                        if (!initialDate || !finalDate) {
                            reject('O campo data não pode estar vazio!');
                            return;
                        }

                        initialDate = moment(initialDate, 'DD/MM/YYYY');
                        finalDate = moment(finalDate, 'DD/MM/YYYY');

                        if (!initialDate.isValid() || !finalDate.isValid()) {
                            reject('As datas fornecidas não são validas!');
                            return;
                        }

                        if (initialDate.valueOf() > finalDate.valueOf()) {
                            reject('A data de inicio não pode ser maior q a data de final!');
                            return;
                        }

                        resolve();
                    });
                }

                function validarLacreLotes() {
                    return new Promise(function (resolve, reject) {
                        const qtdLotesSelecionados = $el.views.viewLacrarLotes.find('[data-item="single"]:checked').length;

                        if (!qtdLotesSelecionados) {
                            reject('Por favor selecione pelo menos um lote para lacrar!');
                            return;
                        }

                        resolve();
                    });
                }

                function ajaxGetDocumentosLotesFinalizados(lotesLacradosAtividade, lostesLacrados) {
                    Ecm.bloquearElemento(".approved-list");

                    let initialDate = $el.inputs.inputInitialDate.val();
                    let finalDate = $el.inputs.inputFinalDate.val();

                    initialDate = moment(initialDate, 'DD/MM/YYYY');
                    finalDate = moment(finalDate, 'DD/MM/YYYY');

                    store.documentosFiltrados = {};
                    store.listaTipoSolicitacao = [];

                    Ecm.Api2.Get('processos/1/atividades/14/instancias')
                        .done(function (response) {
                            const pendencias = response.data;
                            let orderBy = 0;

                            console.log('lotesLacradosAtividade', lotesLacradosAtividade);
                            console.log('lostesLacrados', lostesLacrados);

                            for (const index in pendencias) {
                                const item = pendencias[index];

                                const dataAtividade = moment(item.dataEntrada, 'YYYY-MM-DD');

                                if (dataAtividade.valueOf() < initialDate.valueOf() || dataAtividade.valueOf() > finalDate.valueOf())
                                    continue;

                                const cpfCnpj = _.find(item.camposValor, { id: 20 }) || {};
                                const assessoriaPrestador = _.find(item.camposValor, { id: 2 }) || {};
                                const numeroLote = _.find(item.camposValor, { id: 1 }) || {};
                                const valorLote = _.find(item.camposValor, { id: 22 }) || {};
                                const pastaId = _.find(item.camposValor, { id: 27 }) || {};
                                const lacre = _.find(item.camposValor, { id: 26 }) || {};

                                if (lacre.valor) continue;

                                const loteLacradoAtividade = _.find(lotesLacradosAtividade, { lot: numeroLote.valor });
                                if (loteLacradoAtividade) continue;

                                const loteLacrado = _.find(lostesLacrados, { lote: numeroLote.valor });
                                if (loteLacrado) continue;

                                let tipoSolicitacao = _.find(item.camposValor, { id: 32 }) || {};

                                if (tipoSolicitacao.valor)
                                    tipoSolicitacao.valor = _.upperCase(tipoSolicitacao.valor.replaceAll('-', ' '));

                                const docId = item.id;
                                const docVersaoId = item.documentoVersaoId;
                                const instanciaId = item.instanciaId;
                                const procId = item.processoId;
                                const procVersaoId = item.processoVersaoId;

                                const grupoEmpresa = store.documentosFiltrados[cpfCnpj.valor];

                                if (!grupoEmpresa) {
                                    store.documentosFiltrados[cpfCnpj.valor] = [];
                                }

                                store.documentosFiltrados[cpfCnpj.valor].push({
                                    cpfCnpj: cpfCnpj.valor,
                                    assessoriaPrestador: assessoriaPrestador.valor,
                                    numeroLote: numeroLote.valor,
                                    valorLote: valorLote.valor,
                                    tipoSolicitacao: tipoSolicitacao.valor,
                                    docId: docId,
                                    docVersaoId: docVersaoId,
                                    instanciaId: instanciaId,
                                    procId: procId,
                                    procVersaoId: procVersaoId,
                                    pastaId: pastaId.valor
                                });

                                const result = _.find(store.listaTipoSolicitacao, { cpfCnpj: cpfCnpj.valor, tipoSolicitacao: tipoSolicitacao.valor });

                                if (result) {
                                    result.qtdDespesas += 1;
                                    continue;
                                }

                                store.listaTipoSolicitacao.push({
                                    id: ++orderBy,
                                    cpfCnpj: cpfCnpj.valor,
                                    razaoSocial: assessoriaPrestador.valor,
                                    tipoSolicitacao: tipoSolicitacao.valor,
                                    docId: docId,
                                    procId: procId,
                                    pastaId: pastaId.valor,
                                    procVersaoId: procVersaoId,
                                    qtdDespesas: 1
                                });
                            }

                            initTableDocumentsByDate(store.listaTipoSolicitacao);

                        }).fail(function (error) {
                            Ecm.alertErro(error || 'Não foi possível concluir a sua solicitação!');
                        }).always(function () {
                            Ecm.desbloquearElemento(".approved-list");
                        });
                }

                function initTableDocumentsByDate(dataSource) {
                    const table = new EcmDataTable($el.views.viewTableDocumentsByDate.find('table'));

                    table.emitEvent.on('createdRow', onCreatedRow);

                    const columns = [
                        { title: 'ID', data: 'id', className: 'column--index', defaultContent: '-', orderable: true },
                        { title: 'CPF/CNPJ', data: 'cpfCnpj', className: '', defaultContent: '-', orderable: true },
                        { title: 'Razão Social', data: 'razaoSocial', className: '', defaultContent: '-', orderable: true },
                        { title: 'Tipo de Solicitação', data: 'tipoSolicitacao', className: '', defaultContent: '-', orderable: true },
                        { title: 'Qtd. de Lotes por (CPF/CNPJ)', data: 'qtdDespesas', className: '', defaultContent: '-', orderable: true },
                    ];

                    table.setColumns(columns);
                    table.setDataSource(dataSource);
                    table.init();

                    $el.dataTables.tableDocumentsByDate = table;

                    $el.views.viewTableDocumentsByDate.slideDown();

                    function onCreatedRow(props) {
                        const row = props.row;
                        const documento = props.data;

                        $(row).attr('data-row-id', documento.docId);
                        $(row).on('click', onClickRow.bind(this, documento));

                        $(row).data('store', documento);
                    }

                    function onClickRow(documento, event) {
                        if (event && event > 1) return;

                        store.documento = documento;

                        $el.views.viewPesquisarDocumento.slideUp();
                        $el.views.viewTableDocumentsByDate.slideUp(function () {
                            $el.views.viewLacrarLotes.slideDown(function () {
                                carregarDespesaLotes();
                            });
                        });
                    }
                }

                function resetInputLacrarLotes() {
                    $el.inputs.inputCnpj.val(null);
                    $el.inputs.inputTipoSolicitacao.val(null);
                    $el.inputs.inputEmpresa.val(null);
                    $el.inputs.inputDataEnvio.val(null);
                    $el.inputs.inputValorTotal.val('R$ 0,00');

                    store.valorTotal = 0;
                    store.documentosSelecionados = [];
                }

                function preencherInputLacrarLotes() {
                    store.dataEnvio = moment().format('DD/MM/YYYY');

                    $el.inputs.inputCnpj.val(store.documento.cpfCnpj);
                    $el.inputs.inputTipoSolicitacao.val(store.documento.tipoSolicitacao);
                    $el.inputs.inputEmpresa.val(store.documento.razaoSocial);
                    $el.inputs.inputDataEnvio.val(store.dataEnvio);
                }

                function carregarDespesaLotes() {
                    preencherInputLacrarLotes();

                    debugger

                    const dataSource = [];

                    let documentos = store.documentosFiltrados[store.documento.cpfCnpj] || [];
                    documentos = _.filter(documentos, { tipoSolicitacao: store.documento.tipoSolicitacao });

                    let qtd = 0;
                    for (const index in documentos) {
                        const doc = documentos[index];

                        dataSource.push({
                            inputCheckbox: null,
                            sequencia: ++qtd,
                            assessoriaPrestador: doc.assessoriaPrestador,
                            lote: doc.numeroLote,
                            despesa: 'R$ ' + (parseFloat(doc.valorLote) || 0).toFixed(2),
                            valorDespesa: parseFloat((parseFloat(doc.valorLote) || 0).toFixed(2)),
                            docId: doc.docId,
                            pastaId: doc.pastaId,
                            docVersaoId: doc.VersaoId,
                            instanciaId: doc.instanciaId,
                            procVersaoId: doc.procVersaoId,
                            procId: doc.procId,
                        });

                    }
                    verificarLotesDuplicados(dataSource);
                    validarLotes(dataSource);
                    initTableDespesaLote(dataSource, true);
                }

                function verificarLotesDuplicados(dataSource) {
                    let lotes = "";
                    dataSource.forEach((linha) => {
                        if (dataSource.filter(c => c.lote == linha.lote).length > 1)
                            lotes += " - " + linha.lote;
                    });
                    if (lotes.length > 0) {
                        Ecm.alertConfirmar("Lotes Duplicado", "Lotes selecionados Duplicados: " + lotes, "Fechar");
                        $('.bootbox.modal.fade.in').find('.modal-content').find('button.btn.default').remove();
                    }



                }

                function validarLotes(dataSource) {
                    let listaLote = "";
                    dataSource.forEach((linha) => {
                        if (listaLote.length == 0) {
                            listaLote += "'" + linha.lote + "'";
                        }
                        else {
                            listaLote += ",'" + linha.lote + "'";
                        }
                    }
                    )
                    console.log(listaLote);
                    let retorno = buscaLotesLacrados(listaLote);
                    debugger;
                    console.log(retorno);
                    carregarTableLotesLacrados(retorno);
                }
                function buscaLotesLacrados(listaLotes) {

                    let retorno = [];

                    $.ajax({
                        url: BASE_URL + "api/v2/integracao/select",
                        async: false,
                        method: "POST",
                        headers: {
                            "Authorization": Ecm.token,
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            "connectionName": "CONEXAO",
                            "query": "select * from LOTE_LACRADO_DLL where numero_lote in (" + listaLotes + ")"
                        })

                    }).done(function (response) {
                        //retorno = response;
                        debugger;
                        carregarTableLotesLacrados(response);
                    });


                    return retorno;
                }
                function carregarTableLotesLacrados(dataSet) {
                    debugger;
                    if (dataSet.length > 0) {
                        $('#lotesLacrados').DataTable({
                            data: dataSet,
                            columns: [
                                { data: 'documento_id', title: 'Assessoria' },
                                { data: 'documento_lacrado_id', title: 'Doc. Lacrado' },
                                { data: 'numero_lacre', title: 'Num. Lacre' },
                                { data: 'numero_lote', title: 'Num. Lote' },
                                { data: 'valor_lote', title: 'Valor Lote' },
                            ],
                            order: [[0, "asc"]],
                            "language": {
                                "aria": {
                                    "sortAscending": ": ordenar crescente",
                                    "sortDescending": ": ordenar decrescente"
                                },
                                "emptyTable": "Nenhum resgistro",
                                "info": "Exibindo _START_ a _END_ de _TOTAL_ registros",
                                "infoEmpty": "Nenhum registro",
                                "infoFiltered": "(filtrado de _MAX_ registros)",
                                "lengthMenu": "Mostrar _MENU_",
                                "search": "Filtrar:",
                                "zeroRecords": "Nenhum resgistro",
                                "paginate": {
                                    "previous": "Anterior",
                                    "next": "Próximo",
                                    "last": "Ultimo",
                                    "first": "primeiro"
                                }
                            }
                        })

                        $('.lotesLacrados, #tableLotesLacrados').show();
                    }

                }

                function ajaxGetDespesasLote(documentoId) {
                    return new Promise(function (resolve, reject) {
                        const comandSql = '' +
                            ' SELECT grd.* FROM GRID_VALOR_1 AS grd' +
                            ' INNER JOIN DOCUMENTO_VERSAO AS dv' +
                            '   ON dv.id = grd.documento_versao_id' +
                            ' INNER JOIN DOCUMENTO AS doc' +
                            '   ON doc.id = dv.documento_id' +
                            ' WHERE' +
                            '   doc.excluido = 0' +
                            '   AND dv.documento_versao_status_id = 1' + //publicado
                            '   AND doc.id = ' + documentoId;

                        const parametros = {
                            connectionName: 'CONEXAO',
                            query: comandSql
                        };

                        Ecm.Api2.Post('integracao/select', parametros)
                            .done(function (response) {
                                const dataSource = Ecm.convertArrayObjectToCamelCase(response);
                                resolve(dataSource);
                            })
                            .fail(reject);
                    });
                }

                function initTableDespesaLote(dataSource, showContainer) {
                    const table = new EcmDataTable($el.views.viewLacrarLotes.find('table'), {
                        paging: false
                    });

                    table.emitEvent.on('createdRow', onCreatedRow);

                    const columns = [
                        { title: getInputCheckbox(true), data: null, className: 'column--index', defaultContent: getInputCheckbox(), orderable: false },
                        { title: 'Seq.', data: 'sequencia', className: '', defaultContent: '-', orderable: true },
                        { title: 'Assessoria/Prestador', data: 'assessoriaPrestador', className: '', defaultContent: '-', orderable: true },
                        { title: 'Nº Lote', data: 'lote', className: '', defaultContent: '-', orderable: true },
                        { title: 'Despesa', data: 'despesa', className: '', defaultContent: '-', orderable: true },
                    ];

                    table.setColumns(columns);
                    table.setDataSource(dataSource);
                    table.init();

                    $el.dataTables.tableLacrarLotes = table;

                    if (showContainer) {
                        $el.views.viewLacrarLotes.slideDown(function () {
                            $el.views.viewLacrarLotes.find('input[data-item="all"]').on('change', onCheckAllLotes.bind(this, dataSource));
                        });
                    }

                    function onCreatedRow(props) {
                        const row = props.row;
                        const lote = props.data;

                        $(row).attr('data-row-id', lote.docId);
                        $(row).find('input[data-item="single"]').on('change', onCheckLote.bind(this, lote));
                    }

                    function onCheckLote(lote, event) {
                        const checked = event.target.checked;
                        let valorLote = lote.valorDespesa;
                        const total = parseFloat(store.valorTotal.toFixed(2));

                        if (checked) {
                            store.valorTotal = (total + valorLote);
                            store.documentosSelecionados.push(lote);
                        }
                        else {
                            store.valorTotal = total - valorLote;
                            store.documentosSelecionados = _.filter(store.documentosSelecionados, function (item) {
                                return item.docId !== lote.docId
                            });
                        }

                        $el.inputs.inputValorTotal.val(store.valorTotal.toFixed(2));

                        store.documentosSelecionados = _.uniqBy(store.documentosSelecionados, 'docId');
                    }

                    function onCheckAllLotes(listaLotes, event) {
                        const checked = event.target.checked;
                        let total = 0;
                        store.documentosSelecionados = [];

                        if (checked) {
                            $('#DataTables_Table_0 tbody tr').each(function (index, item) {

                                let docId = parseInt($(item).attr('data-row-id')) || 0;
                                let documento = _.find(listaLotes, { docId: docId });

                                if (documento) {
                                    total += documento.valorDespesa;
                                    store.documentosSelecionados.push(documento);
                                }
                            });
                        }

                        store.valorTotal = total;

                        $el.inputs.inputValorTotal.val(store.valorTotal.toFixed(2));
                        $el.views.viewLacrarLotes.find('[data-item="single"]').prop('checked', checked);
                    }
                }

                function getInputCheckbox(allSelect) {
                    const item = allSelect ? 'all' : 'single';
                    return '<input type="checkbox" class="selected-docs" data-item="' + item + '" />';
                }

                function getOnlyNumberFloat(numberString) {
                    return numberString ? numberString.replace(/[^0-9\,]/g, '').replace(',', '.') : '0';
                }

                function execLacrarLotes() {
                    store.documentosLacrados = [];
                    Ecm.bloquearElemento($el.views.viewLacrarLotes);
                    exibirModalProgressBar();
                    debugger;
                    verificarLotesSemLacre();
                }

                function verificarLotesSemLacre() {
                    let listaLotes = [];
                    store.documentosSelecionados.forEach((linha) => {
                        console.log(linha.lote);
                        listaLotes.push(linha.lote);
                    });

                    const query = "select * from lote_lacrado_dll where numero_lote in ( " +
                        JSON.stringify(listaLotes)
                            .replaceAll("\"", "'").replace("[", "").replace("]", "")
                        + " )";
                    const parametros = {
                        connectionName: "CONEXAO",
                        query: query,
                    };

                    debugger;

                    Ecm.Api2.Post("integracao/select", parametros)
                        .done(function (response) {
                            debugger;

                            if (response.length == 0) {
                                verificarLacreDocumentoECM();
                            } else {
                                let lotesLacrados = [];

                                response.forEach((linha) => {
                                    lotesLacrados.push(linha.numero_lote);
                                });

                                swal(
                                    {
                                        title: "Existem Lotes já lacrados",
                                        text: "Lotes: " + JSON.stringify(lotesLacrados)
                                            .replace("[", "")
                                            .replace("]", ""),
                                        icon: "error",
                                        button: "Fechar",
                                    });
                                Ecm.desbloquearElemento($el.views.viewLacrarLotes);
                                fecharModalProgressBar();
                            }


                        }
                        );


                }

                function verificarLacreDocumentoECM() {

                    let listaLotes = [];
                    store.documentosSelecionados.forEach((linha) => {
                        console.log(linha.lote);
                        listaLotes.push(linha.lote);
                    });


                    const query =
                        " select valor_texto from DOCUMENTO_VERSAO dv                                  "
                        + " inner join DOCUMENTO_VERSAO_CAMPO dvc on dvc.documento_versao_id = dv.id     "
                        + " where dv.nome in ( "
                        + JSON.stringify(listaLotes)
                            .replaceAll("\"", "'").replace("[", "").replace("]", "")
                        + " ) "
                        + " and dv.documento_versao_status_id = 1                                        "
                        + " and dvc.tipo_documental_campo_id = 26                                        "
                        + " and valor_texto is not null"
                        ;


                    const parametros = {
                        connectionName: "CONEXAO",
                        query: query,
                    };

                    debugger;

                    Ecm.Api2.Post("integracao/select", parametros)
                        .done(function (response) {
                            debugger;
                            let status = true;

                            response.forEach((linha) => {
                                console.log(linha.valor_texto.length)
                                if (linha.valor_texto.length > 0) {
                                    status = false;
                                }
                            })
                            if (status) {
                                ajaxGetUltimoBordero().then(function () {

                                    execProgressBarDocumento(store.progressoDocumentos.current);
                                    debugger;
                                    gerarPDF().then(function () {
                                        execProgressBarDocumento(store.progressoDocumentos.current);

                                        iniciarDocumentoNoFluxo().then(function (documentoId) {
                                            const docSelecionado = store.documentosSelecionados.shift();

                                            salvarNumeroLacreDocumento(docSelecionado, function () {
                                                execProgressBarDocumento(store.progressoDocumentos.current);

                                                ajaxMoverDocumentosLacradosEmLote()
                                                    .then(function () {
                                                        Ecm.alertSucesso('Documento(s) lacrado(s)');
                                                        Ecm.desbloquearElemento($el.views.viewLacrarLotes);
                                                        fecharModalProgressBar();
                                                    });
                                            });
                                        });
                                    });


                                }).catch(function (error) {
                                    Ecm.desbloquearElemento($el.views.viewLacrarLotes);
                                    Ecm.alertErro(error || 'Não foi possivel concluir a sua solicitação!');
                                    fecharModalProgressBar();
                                });
                            } else {
                                let lotesLacrados = [];

                                response.forEach((linha) => {
                                    lotesLacrados.push(linha.valor_texto);
                                });

                                swal(
                                    {
                                        title: "Existem Lotes já lacrados",
                                        text: "Lotes: " + JSON.stringify(lotesLacrados)
                                            .replace("[", "")
                                            .replace("]", ""),
                                        icon: "error",
                                        button: "Fechar",
                                    });
                                Ecm.desbloquearElemento($el.views.viewLacrarLotes);
                                fecharModalProgressBar();
                            }


                        }
                        );


                }

                function exibirModalProgressBar() {
                    setTimeout(function () {
                        $el.viewModalProgresso.dialog('open');
                    }, 300);

                    store.progressoDocumentos.current = 0;
                    store.progressoDocumentos.total = (store.documentosSelecionados.length * 2) + 7;
                }

                function fecharModalProgressBar(forcedClosed) {
                    setTimeout(function () {
                        $el.dialogContext.modalProgresso.dialog('close');
                    }, 300);
                }

                function execProgressBarDocumento(value) {
                    const current = value + 1;
                    const total = store.progressoDocumentos.total;
                    const percent = (current / total) * 100;

                    store.progressoDocumentos.current = current;
                    const $progressBar = $el.viewModalProgresso.find('[data-name="progressbar"]');

                    $progressBar.progressbar('value', parseInt(percent, 10) || 0);
                }

                function salvarNumeroLacreDocumento(documento, callback) {
                    debugger;
                    reservarDocumento(documento.instanciaId)
                        .then(function () {
                            execProgressBarDocumento(store.progressoDocumentos.current);

                            publicarDocumentoNovoLacre(documento.docId)
                                .then(function () {
                                    execProgressBarDocumento(store.progressoDocumentos.current);
                                    store.documentosLacrados.push(documento);

                                    if ($el.dataTables.tableLacrarLotes.rowRemove) {
                                        $el.dataTables.tableLacrarLotes?.rowRemove(`[data-row-id="${documento.docId}"]`);
                                    }

                                    if (store.documentosSelecionados.length) {
                                        const docSelecionado = store.documentosSelecionados.shift();
                                        salvarNumeroLacreDocumento(docSelecionado, callback);
                                    } else {
                                        callback();
                                    }
                                });
                        });
                }

                function ajaxGetUltimoBordero() {
                    return new Promise(function (resolve, reject) {
                        const query = "select distinct * from UltimoBordero";
                        const parametros = {
                            connectionName: "CONEXAO",
                            query: query,
                        };

                        Ecm.Api2.Post("integracao/select", parametros)
                            .done(function (response) {
                                if (!Array.isArray(response)) {
                                    reject('Não foi possivel recuperar a numeração do bordero!');
                                    return;
                                }

                                store.numeroBordero = response[0] ? parseInt(response[0].nome) : 0;

                                store.numeroBordero += 1;

                                resolve();
                            })
                            .fail(reject)
                    });
                }

                function gerarPDF() {
                    const logo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAAIZCAYAAADuqCqiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR4nOzdbZBc2X3f93N7ZvC0D8BKsajEqQGWlCVLitigNLIkUloMVVIoVbkM2GWHY7lGwEqqVPImC9LS5EUSLxjHeTGRtKCcKpeKDwA4lDKyqBBQ4qrEVrIAKTkp18hEU1VJXJWQwFCJRJHLxewTMA/dJ3XuPffec5/64fa93fee8/0smzPT090zfbsB/Prf//M/npRSoDprG73zQogzHFJgKve3N7uPOIQAABcQyCu2ttG7K4S4YNWdApqlJ4Qww7r6/L7x9X3j+w+2N7sPePwAAE22yKMDoGW6Ob/uxaK7sLbRCz+9pz8+0KcwyD/a3uzeL7o+AAB1I5ADcEX4zlXmHSwd2vd0QA8DexjW7/IMAQDUiZaVitGyAljpoQ7pd8OwTlUdAFAVKuQAMNpZfYpebOuq+j2jmn6fajoAoAwq5BWjQg44754O6Hd1SGdRKQBgKAJ5xQjkAFIe6nDunwjoAIA0AnnFCOQARggD+m0d0Jm3DgCOI5BXjEAOYEI9Hc5vs1AUANxEIK8YgRzAFB4alfPbHEgAcAOBvGIEcgAV2TMq54RzALAYgbxiBHIANQjD+U1GKwKAfQjkFSOQA6iZamu5qcM5E1sAwAIdHkQAaBW1QdHLQoivqgLA2kbvCg8fALQbFfKKUSEHMAd7ump+nao5ALQPFXIAaL/TQoiXdNX89tpGb5XHFADag0AOAHa5KIR4dW2j94B2FgBoB1pWKkbLCoCGUYtAr+tFoOwKCgANRIUcAOymFoG+IoRQFfNraxu9MzzeANAsBHIAcMNpPZ2FYA4ADUMgBwC3mMGcHnMAaAACOQC4SQXzG3rx5yWeAwAwPwRyAHCb6jH/vN5k6LzrBwMA5oFADgAQejrUl9Y2etfpLweA2SKQAwBML9FfDgCzRSAHAKSF/eWqjeUcRwcA6kUgBwAUUW0s99WYRI4QANSHQA4AGMYfk7i20btPtRwA6kEgBwCMo6ur5Vc5WgBQLQI5AGBcqlr+ytpG7zaTWACgOgRyAMCkLupJLKscOQCYHoEcAFCGqpa/yoJPAJgegRwAMI2XaWEBgOkQyAEA01ItLGy9DwAlEcgBAFXo6lBOXzkATIhADgCoSthXzrb7ADABAjkAoGo3WOwJAOMjkAMA6qAWe97kyALAaARyAEBdLhPKAWA0AjkAoE6XGYsIAMMRyAEAdQvHIhLKASAHgRwAMAtdQjkA5COQAwBmRYXy6xxtAEgikAMAZomFngCQQiAHAMwaoRwADARyAMA8XGbzIAAIEMgBAPPyMtvsAwCBHAAwX2qb/fM8BgBcRiAHAMybGod4jkcBgKsI5ACAeTsthGA3TwDOIpADAJqAGeUAnEUgBwA0xWUWeQJwEYEcANAk11nkCcA1BHIAQJOofnI2DQLgFAI5AKBpumsbPfrJATiDQA4AaKKX1jZ6qzwyAFxAIAcANNVNRiECcAGBHADQVGeFENd4dADYjkAOAGgyWlcAWI9ADgBoOhZ4ArAagRwA0HRq6spVHiUAtiKQAwDa4BoLPAHYikAOAGiD0yzwBGArAjkAoC3UAs9zPFoAbEMgBwC0CQs8AViHQA4AaJOLjEEEYBsCOQCgbeglB2AVAjkAoG0uUCUHYBMCOQCgjZhLDsAaBHIAQBtdZOIKAFsQyAEAbUUvOQArEMgBAG11md07AdiAQA4AaDN6yQG0HoEcANBmV3j0ALQdgRwA0GZn1zZ6l3gEAbQZgRwA0HZUyQG0GoEcANB2jEAE0GoEcgCADWhbAdBaBHIAgA1oWwHQWgRyAIANurStAGgrAjkAwBa0rQBoJQI5AMAWtK0AaCUCOQDAFrStAGglAjkAwCa0rQBoHQI5AMAmqzyaANqGQA4AsMlFHk0AbUMgBwBYZW2jR5UcQKsQyAEAtqGPHECrEMgBALY5zyMKoE0WebSAidwSQjzgkE3snD6FVGA63Z5fHy1zgQcMQJsQyIHJ3Nze7N7lmFVjbaN3RofzMLCvEtZRBdVHzp9VAG1BIAcwN9ub3UdCiExo0pu7rBqnszxKmNBq3nMLAJqIQA6gcbY3u6ot6KY+qYB+Xm+LfolwjjHRRw6gNQjkABpve7N7XwhxVZ10OFefX+aRwxAEcgCtwZQVAK2iwvn2ZldVy58TQnxMCLHHI4gcZ/UaBQBoPAI5gFZS/efbm91rejHox3kUkYMqOYBWIJADaDUdzFULy/uEEPd4NGEgkANoBQI5ACvoVpZV3cYCiNTsewBoLAI5AKvoNpb30VsOKuQA2oJADsA6eiqLCmM9Hl2nEcgBtAKBHICV9CzzVUK509jxFUArEMgBWEvvBEood5ieWw8AjUYgB2A1I5TTU+4mZpEDaDwCOQDrGaEc7qFCDqDxCOQAnKAXen6ER9s5VMgBNB6BHIAztje719k8CADQNARyAK65yiPuFFqVADQegRyAU3Tryi0edQBAUxDIAbjoGo86AKApCOQAnKM3DaJK7gamrABoPAI5AFfd5JF3Art1Amg8AjkAJ21vdu8KIR7y6AMA5o1ADsBlt3n0AQDzRiAH4DICOQBg7gjkAJyl21YAAJgrAjkA17FzJwBgrgjkAFx33/UDAACYLwI5ANc9cP0AAADmi0AOwHVUyAEAc0UgBwAAAOaIQA7AaUxaAQDM2yKPAAAAAEzrO7ur+stV4+xVDlItbhLIAQAAHLW+s3tOCHFen1TgVl+f5fkwU1cI5AAAm+3x6AKx9Z3dM0KISzp8rxK+5+7e1sryAwI5AMBmTNGB83QVXIXwK0KIruvHo2FuCnrIAbhubaNHTyQA6xiV8KuE8MZS7+DdFgRyAIDl2PgJTtHV8Gs6jJ/m0W+021sry48EgRwA/IVMsBeBHE7QU1FUEL/AI94a18NflEAOwHXnXD8AliOQw2oE8dbqba0sR2tcCOQAXEeF3G4EcljJaE25zCPcStfNX5pADsB1VJUsxk6ssNH6zu41vViTHvF2ihZzhgjkAJzFhBXrPXT9AMAuuj3lJrPDWy9azBnquH5EADjtkusHwHK0q8Aauir+KmHcCjfTd4IKOQCXEcjtRrsKWk/3it9mlrg1Hm6tLGf+bqJCDsBJul2FSpPd2KUTraZbVO4Txq1yPe/OEMgBuOoKj7z1qJCjtdZ3dq/oFhUWbtol064iaFkB4KK1jd45RoVZr7e92X3k+DFAS63v7N7k7ygr3Uov5gxRIQfgoms86tajOo5WIoxb7XbRnSOQA3DK2kbvPP/YOYFAjtYhjFtNLeYkkAOAlrugBtYhkKNVCOPWy+0dDxHIAThjbaN3jZ05nXCH/nG0CWHcCQRyANCtKi87fyDcQHUcrbG+s3uVMG69O1sry0M3KiOQA7De2kbvDCHNKYV9mkCT6Dnjr/CgWG9odVwQyAHYzgjjzPJ1w73tzS5b5qPxjB04YbehizlDBHIA1jLCOLvcuWNkJQpoiNsUCpww1osuAjkAK+nNfwjj7qHiiMZb39m9xt9NzhhrsheBHIB11jZ6qi/zPv/gOecW01XQdOs7uywwd8e9UYs5QwRyAFbRow1f5a1gJ9GugjZgLwR3jP130qLrRwqAHfRYw5tUxZ3V297sMkkHjba+s3uFvRCcsbe1skwgB+AGvXDzOnN8nUfVEW1wjUfJGRO9Y0cgB9BKetGmqjZdpT3FeQ+3N7u0q6DRdHX8LI+SMyYqEhDIAbSKXrB5hYo4DIRxtAHVcXf0xl3MGSKQA2g83R+uQvglKkxI2aNdBU1Hddw5E/+dRCAH0Di6HWXVOPEPGYpcZ9QhWuAqD5Iz9srsh0AgBzA3OnibJxW+z9MTjjFRHUfj6bnjTH9yx+2tleWJiwSLP/+b/+d/fPSN/j8YvNH/N64fwYqct+JeoMj1tY2eS9W4B/o0rdXU9QndqMI1quNogSs8SE4pVSRYlIfi3x+80f9OIcR3un4EgTG4VuVgXi6aSk1WoTqONiCQu0Mt5rxf5t6yUycAoI0IOWg8vZiTdwPdUbpIQCAHALTNPXblREtc4oFyysSLOUMEcgBAm+xRHUcbrO/sqoXqF3mwnHGrzGLOEIEcANAmasxhFQuNgbrxwtEtU21QRiAHALRFb3uzy26HaAsCuTsebq0sT9VGRyAHALQFAQetsL6zy4Zmbpl64hOBHADQBh/b3uyWGicGzAEvHt0yVbuKIJADAFqAVhW0xvrO7hkhxGUeMWdMtZgzRCAHADTZHqPj0DJUx91SetShiUAOAGiyK0xVQcsQyN2hFnMSyAEAVvv49ma3kn/sgFlY39k9L4TocrCdMXXveIhADgBoItU3fpVHBi3Dc9YtBHIAgLVU3/gqDy9aiPUO7riztbJcWTsdgRwA0CR+GN/e7E49tQCYpfWdXdU7fpqD7ozKquOCQA4AaJirzBtHS7GY0x2VLeYMEcgBAE3x4vZmt9KqEzAL6zu754QQFzjYzqh8sTmBHADQBLcI42gxquNumXqr/DQCOQBg3lQYJ9CgzXj+uuNelYs5QwRyAMA8EcbRaus7u2qyylkeRWfU8k4egRwAMC+EcdiAUYfu2NtaWSaQAwCsQRhH663v7J4RQlzmkXRGbetcCOQAgFkjjMMWPI/dUvlizhCBHAAwS4Rx2ITnsjt6dSzmDBHIAQCzQhiHNdZ3ds8LIbo8os6orTouCOQAgBn5GGEclrnKA+qMvTo2AzItun6EAQC1YwdOWEUv5mS6ijtub60sP6rz3hLIAQB1UVWlS9ub3bscYVhGhfHTPKjOqLVdRdCyAgCoyUMhxCphHJai/codajHn/brvLYEcAFC1e0KI89ub3dr/EQNmbX1n95wQ4gIH3hm1V8cFgRwAUINr25vdWvstgTliMadbal3MGSKQAwCq9uraRu8aRxWWYjGnO27VvZgzRCAHANTh5bWN3v21jd55ji5ssb6zq8L4WR5QZ8xsOhSBHABQF7VpypfWNnq8xQ9bsJjTHQ+3VpZntiidQA4AqNsraxu922sbvTMcabSVnj1+kQfQGTNZzBkikAMAZkEFmQdrG71VjjZaiuq4W2a6mRmBHAAwK6dZ8IkWo/XKHTNbzBkikAMAZk0t+LxLCwvaYn1n9zyLOZ0yk1GHJgI5AGAeLugWFqawoA2ojrtDLeYkkAMAnHFaT2GhNxeNpRdzMnvcHTPtHQ8RyAEA83ZjbaM3l38EgTFc0i8e4QYCOQDAWZf1RkL0laNpeAfHHXe2VpYfzOPeEsgBAE2hNhJid080xvrO7jm93gFumNs7dQRyAECTqEkWd5lXjoZgMac75rKYM0QgBwA0TTivnFYBzBuLOd0xtzAuCOQAgAa7wSZCmJf1nd1LzB53yky3yk8jkAMAmuxlJrBgTniHxh335rWYM0QgBwA03WVCOWZJL+a8yEF3xtz/fiGQAwDa4DLb7WOG6B13x97WyjKBHACAMV3QE1gI5agb01Xc0Yh33wjkAIA26RLKUaf1nd1VFnM6hUAOAEAJhHLUicWc7uhtrSzfb8K9JZADANqIUI7Kre/snqF/3ClzHXVoIpADANqKUI6qXdIbU8F+e/PeDMhEIAcAtJkfynkEUREWc7rj9tbK8qOm3FsCOQCg7brMKce09OzxLgfSGY1pVxEEcgCAJdg8CNOiOu6OxizmDBHIAQC2UKH8Go8mSmK6ijsa9+KdQA4AsMnLaxs9ghUmsr6zy2JOtxDIAQCo2Y21jd55DjImwIs4d9xq0mLOEIEcAGAjNQ7xHI8sRtGLOS9yoJzRyLUmBHIAgI1U+8FtZpRjDGwE5I6HWyvLjRyTSiAHANiq29RqGBqF6SruaNSoQxOBHABgs4trGz0CF3Kt7+yuCiHOcnSc0dgX6ARyAIDtXlnb6K3yKCMHizndcaeJizlDBHIAgAvoJ0fC+s6uej5c5qg4o9HtawRyAIALTtNPjhQWc7pDLea83eR7SyAHALiCfnKYeC64o/EvxgnkAACXXGPTIKzv7J7XU3jgBgI5AAANQusKBIs5naIWcz5o+h0mkAMAXNNd2+hd41F3GoHcHa14AU4gBwC46GW21nfT+s7uFf1OCey31/TFnCECOQDAVbSuuInpKu5ozZ9xAjkAwFUX1jZ6tC44ZH1nV70rctH14+CQxm6Vn0YgBwC47DobBjmFF2DuuNeGxZwhAjkAwGWql5gFnu4gkLujVS1pBHIAgOteYoGn/dZ3dleFEGddPw6OUIs5CeQAALRMa3pNURrVcXe0bsE2gRwAgGBb/VWOg53Wd3bVOoHLrh8HhxDIAQBoKXrJ7cWoQ3f0tlaW77ft3hLIAQAIXKBKbq2rrh8Ah7Sy/YxADgBAjCq5ZdZ3ds8LIbquHwdH7AkhWrEzZxqBHACAGFVy+1Add8ftrZXlR228twRyAACSCHB2oX/cHa2dlkQgBwAg6SJzye2wvrN7RW/+BPu1cjFniEAOAEAWveR2YPa4O1o36tBEIAcAIOvS2kbvDMelvdZ3dtW7HBdcPw4OIZADAGCZ0/Qetx7VcXfcautizhCBHACAfCzubDcCuTtaXR1XvL/3T3o/3peHnzkUR+fkYOAFZ8vk/6svpT5PffDir8PLRmTq68S3zO95Y13HuND492ougvtz9NW3hLe/0PDftRk8z5vs9/Avn/ccSn80PjM+iX+eF33wRPp38PTPEdHH4DLBE9/rLPzm0rGn/q82HN+K/Lk+1UHNBg5bAsLP1VvMZ9t8wGCd57c3uw94WNtlfWdXvbvxedePgyMebq0st34R9uJn/6P3/qEQ4t0v/sGfPN8fHP3G46ODn+n3B4syDD5G7k4Eav9zaXyZDuYiddk0mb3OSE0M5WGgC363o4ePhXdoXyCfODyPvsVxfqj+JH7cEwE68Tt5ycskbj4vjHs5l01dzoujePj14Tvfuv17n3z//zTuvcRQd4u+ubbRCwP6qg7r59jYA3NylUp5K9Fu5I7Wjjo0eXmh+Of/+ZduPekf/dzh0eGif0Z4mahKnvw6HZRzg/bIgJ5zlYkD+/wd/NG3ROfNxdb93nOVCNbJxzxTwc68MPCyl02Vx8uG8eRtBh8Pn7zxs//skxcJ5HOgF9id1yF9lcVamJGH25tdRiC2yPrOrvq74nXXj4NDnmt7/7goCuShy//i/i/vHx7+F/v9w2f9s4qCuZgwnGcvlnM77bT/R6+JzhsOBvKxKujDH9ts+0jR7Xqpr0YFcZEI43mXHxrGjesd7r/1M//jJ/76/zz0jmBm/B0Vpbw0kP0Pet7Ce6t/JwfwfXB7s1v4jg6aZX1nV72j8QoPixPubK0sW/FuyNDkeOunz/+qEOJXL/+L3t877B/9V48P98/5gTkKLAFpnOefa4TqvH8fg8sX/FDzCi3M5tl2CVfkP1jJkD3kwAwNUtnvZUO1GBnE8683LIxLo3WFoNdEOiTd/cv/9ru8H/vw55/vLCxdEZ73nwjhnfa8hRpareCoK8NarNA4LOZ0R+sXc4aGVsjTXvyDL1846PdvPDncPzcY9ON/6YzbyPaSp29/9M9rY6tK6OAPXxedNxwaXlNp4Cm+rWS1Ov96uUFciGygnjCMR+epHvInb1Ihb4G/89F/9QtCypelkMue1xGdzqJakOv6YUF5e9ubXWaSt8D6zq5qa/uS68fBEVYs5gxNlBxv/NR77/3Wh9737mdPPPWep46f/KOFxUXpBxbj5HU6fsgJT+nvC6+jE1HeKWBev20n//7l3m9LT4WKHuNhJ/34p//zvOTV9KXCU/RcS5wvouOdqIp7InG96BtjhHG0x+/++l/79MLSiW6ns/APpRy80T96Io4O3hb9o/1Wv+DH3Jxe2+hRdW0HFuC6w5rquCg7h/zGT/3AVz/7oR/88W//tnc9/8zxk59ZXFg4igKnEEMDen5IN8K6eSoV6uZ78lr4O9dz0k+FSf7zcsJ3bgBPvegzLxw+79RlwscjdTuZAD8qjJv3hSpra2xvdh/901/74X/Q6SycF17ni+r3HgyO/GB+dPjY/xyYAFM72oHHyR1WBfKJWlaGufwHX7755HD/wwdHhycSFytc1Dn857a1inX4h68Lb8+SlpWZF4WzP7C4B9hLX1CfW9Ta4g1Z5Jm6cM6ElfDzw4O3f+Z/+M2fpWWlhf7O3/9XH5WDwa9JOTDGtnpiYfG46CwsuX54MJ7n1As9jlUzre/sqncxbrh+HBxhzWLOUGXJ8dZPvffK7/zsD5989sSpXzlx/OReXJ0sd/Ir63mnJrWw5Px+Fha5c1T3Q4JqdydT9c5vQ8lWwgur4YmKeCd7W+l2FiES53l5l5n5CxRU6Xd/7a/9utfp/JDndd4IH1AVzlW1/ODJG6LfP+B4YxTaVpqNx8cdVlXHRZUV8rRfePX/+Ln9gyf/6PHhwbl0NVxOMz6laZXzVAX34AvfcmtRZyVGJN3UMc4fj5j9Yvi0ldSVCuaOJ8O4J44O3/nQ7/+TD/3zWRwV1ONvf+RfPieluCek/AFzgzL1sdNZoGKOYXrbm93zHKHmWd/ZVYv7vur6cXDE3tbKsnWLrGtLjp/+4Pf99m996Aef/7Znn7tw6uTJP+ksdGSiohmeJvjP17DFkbkLEK0qk8/gVHRsC54j+dV8s+KeU12PHi+RWxUXqTCe7T+nPG6Lz73y/tc9T1wQnvcn5uOqngaqr/zw4G3/1Mq5q6hbV+8ii+ZhMac7rKuOizoDeeiTL3zPFz77U+ff+8yxU+955tTTf6gms5i5a6Lwm2hvaMYp83t2HJuyMukLmLzHreC/4a006baXvBAePxaZIB6GdH3+8BaVvIo72iwK5UL8if/nOHwm6Md40D8Q+48f0caCPLRFNBOLOd1hxVb5aTPrrVCTWW795L/3E7/7Myudp46duLW4uHQUBDS7MqcwAh7/Zf+bqOCuj2Z+z3lBn7n5Iim+lvFM9FLfz6mKh1c0fhHCuH38UN7xLgghv5Ztbwo2ODvcf9PvL6daDgPBr2HWd3bVY3LW9ePgiHtbK8sPbLyrc2l2/sxPn7/yOx/6oaVnTz1z89jisT2/qhye2l4BnjR0unYa4w4PW+gZMC4fjck0K+HCiNZhwE4H9SFVcaNFJf1zPW+BZGaRIJR31D/m0ULP+OGOq+VP3n5NDPqHrh8uBM6ubfQI5c3CuxbusLJdRcwrkIdurH7fi//dh37wzJlnzvz940vH96aZytKYQN5pXltNs06jp9cUhvVU+E5XwY1uYP0hP4Sng3i2VzxdFTf60GGdz73y/n8t5OCX817whc8qteBTtbAc7r/FEwCCKnlzrO/sqsV9F10/Do5QizkJ5HX61I9/96//9k91zzx74qkLp46d/KrafGVoiGzCfwW/W8D1MniJU2JTqKJ3H9JRKT1DPK9lJd2Kkgri0dWTQTwZzgRh3HK/9xsvfEII+c/Ce5mokhvPh6ODd/xgzm6fzru0ttFjK/1moDruDmvDuLLYgN8h8ukPft8XhBDv/qUv/JsX9o8O/vF+v/8Dg0G/mUmoKKCFgRCTHc6h58jiS3rZ15SZsYhGOM/+UKOunnjcskHcj+xehyRmqcMne5cXT5z+ipDi2eDRzn+o1fb7+++8Jo6ffI6dW911WlfJrQ4ILcF0FXdY/eetkQOz1WSWrZ/8ge5zz5x5/qnjJ7+42Okcjbf1/gxPRiU1ceK/Ef/l188D2XOi84uq56kqeLrtKbFpkEj/iKKKeF5LDGz3+7/511/zhPhvPePPtzCfU8GZ/tdqPOKTt7/p95fDWbStzNn6zu55FnM6o7e1snzf5jvb6B1sfvNHzz28tfp9L2z/9PuWnj524ubi4uKRGNIuMutTfp8z0W24dHvK6FYVMeKFTlEALw7hOmhNFMSJ5S743//p3/7PhZRfS9zVRECPQ7na5TNY7Ekod9TFtY3eOdcPwpxRHXeHlaMOTa3ZUtJfAPqT71165sTJzeNLx/aas5AzJ/A15ndr6Cmnqj26ri5y78vIAO6lzxhdEReZ6G3+/Lqf6Zin//fPvi6FkP8w8dxILRkWYTOLF7S1PCaUu4wq+ZzoxZwcfzfsCSFu235PW7fH+6df+Kv/6Wc/+P1nTp96+qMnFpe+Pv/MmWxZ6XQasui04f/5xjzIwxbzBrdjnvIbYornlmeDeOYr4zIdr1HLLlADb2Hxc8ILxiB6Zg43nj/hc0+qj3IgHr/1TcYiuokK7fxc0r38sN/trZXlR7bfy9YF8tAnP/Bdr2x98Pu/8/TJZ144sXT8K15TZpgHC/84hafOkNPIEYgFu6EWBfbMWEVj+k1Oe4yXM7klr1898wIAVvNnkwtvK7iPxnPC5HlGLFf/r0L51wnl7jnLVvpzw3QVd1jfriLaHMhDn/jAe774mQvf+55njz/1wlNLx7/Y6SzIcWZd13di6/zkC5RpToHRc8tFTi9/dl55+lKZczKXTYVwf848GwM5QQ5uxIs7gzvsifAFYOo5odui1CTEx2/9hb/gE04hGM7Y+s6u6t2/4NSddpf1izlDrQ/kIRXMb7zwV184ffLp508tHvviQmfhqPbZ2Y4t6pzXixzjNyg45vnTV/Kukbmt3Otkg7jNjyuyfu83XvhjIUTu4s7oS7NtRf/5kIO+ePLWN5hT7hYC+ezRKuQOZ0aLWhPIQ2oyiwrmv736/Woyy43FhYWjWVeF51uhn0UwntS0L3JGTGHR8rvHC75bEMKHB3FCuVu83w/ubmpxZ1QyT7etSP881bby5K2/cP3gueQ0W+nPHMfbHQRyG3zqx//KL/zWhe9beubYiY8e6yzszSS4JgIkp1HjDMdre4kNi+5DL1UY4gtCeG5lHi7pdBZeTbetiOjrvLYVET1Pjo6e+Dt6whkExBlZ39m9xOxxZ9xyYTFnyOpAHvIXgF743jNPLx3/6ImFxa+IGheATldJdsP0XeWhIW1DIwL4eG0p8U+Nb4qdOl0hxeB/zT7rks+bZNtKXDlX/x08fuRvtT2bwpIAACAASURBVA8nXGYr/ZmhRcgdTu2E60QgD6lgfvMnvuc9zywce0EFc6+OUF5/l3rrT8NN0soyTkV9yJSUodXwZBCPvwdXqGkrQog/ST4vjOeOiMN39GzzksH88dvf8DcQghOoktdMzx6/aPWdROjh1sryXZeOhlOBPKQWgN788e9+z7PHTp472Vn4Qsfzon0+ps7jRTt4choRrku0txiKpq4nL1R0/fwQngzihHEXeV7n4ai2FRk+Q7zwK4OU4p03v+76YXQFldv6cYzd4cSoQ5OTgTzkLwD98e++8MzSieef6izeWfA6009m8XKCH6eJwnWeUdscZYz8GaNCuMgP4uRyt3jifl7bSvIr84kTV8dD/cPH4uDJnutH0gUX2Eq/dkxXcYf1O3Omse2gDubh242/+Ef/96cOhPy7R4P+yXK3xvYxMzV2z37+5bJXH3J76sJ0kDul4y2+3hfhtvjhc0P6f8pl6skQ9JHLYPyhjC+jvt5/53WxdPyZYJ8C2ExVcK/xCFdvfWd3lcWczriztbL8wLU7zb8OKZ/6wHf94tYH/sqppxePffRYZ/HRxIs6iePlTNGzn1T07sWwq3v51fD0lfyOJDYGcslgcNgTRntKstMpv488bmKJL6P6yB/TuuICWirqw7F1h1OLOUME8gKf+LF3v3LrA9/13NOdxb97wlv4ykSzumlRqSBYDzOsbaj4IYjlXyf3ytlv1vF0Q9tEAT2vjzxvQyvhT1w5OnzMQ203ttKvgV7MyaJZN6jFnM61qwgC+WifeP97tm984Lve85RYUJNZ/h9/7N2wCnmHQxqocxGr/glj5fvi6yd/3dEvDryo+glXLB57qh88J8wKuBetakg8NxLPHZl9LvmtK6/x3LEffc7VU2H8tG13CrmcrI4LAvn41GSWT//ou7/r6c7i8ydE5wudofOo6wyjbTmNr5qi+vDwnv8wjRfCCxeOwgmZJZ15bSv6uZKYR248b8KK+dHhE6rk9qOSWz1e5LiDQI7xqAWgn37/ey485S08f8rrfDpvMovr3SfVdKuUq5oXGv8HjwjhBHNXxW0oyf7wcD+DdNtKJBXaqZJbj630K7S+s6sm13StuUMYxsnFnCGmrJSkJ7P8ojr90v/2lU8eevLnjqQ4OXZARPWGhOxhRla/060IcEb/6HHH//McdSuFj39x65OU8dPGr5jLMKoH3zg6CKrki0slBzmhDa64OLatJlTH3eH0nxkq5BX45I+9+5du/eh7Tp0S3keDijkqV77UnmtkK0rJ24UbwqdF3jb6sZwXb14Q7vff+RbPFLtdZCv9yjBdxQ17WyvLzrarCAJ5tdRklv5rR//S+R6U2fW15Bq1iZCXbieY4Od1Oryp5BLPWzwvPGOoYd5zI9WS4iXOyvaRC7+X/B3RP9p3/fDajraVKa3v7LKY0x1Oh3FBIK8ei//qMU7IHrn4csqgD/dIefRc6kmU/JjTRx58TLWupZ9r0hMHjx/xjLIbrRbTozruDue2yk8jkNdgkvDIf1OG7DwVVNmBQEcvJvOS4Ts8L/XcTD5fvSiox5cPRyQKcbD/hhj0DznO9uqylX55ejHnxbb+/pjIPZcXc4YI5GiHmtpbgBGCrbq97MvCvD5ykdkkSGYvE15RVcn33+D4240qeXm0/LjD+XYVwZSVmhAKgdbTi/Le6/mTU8wFmqkNojwvitzBIBa9KZA0ttDXGwX5s8ql1DPLpTh455E4cerbebLY6xKhvDSOmxucX8wZokJeNc9jLh5gATk4/GDyXqTfgcmfgx+2rYR95Hnb6Afv5qjMPhAHT6iSW0xtpb/q+kGY1PrO7mr07hRsx3hQjUAOADmkFDqQm1NU9Meonzw8P9mSkmlb8QrWQnhCPHn7mxx+u7EwcXIcM3c4v5gzRCAHxqACWO7IO1hMJheUeUZ1Ox2uU+sXPJFezBlfNw7zHb+PXA76bKdvN3qhJ7C+s3uGY+aM3tbK8n3XD0KIQA7kCAM4QdxNH/7lP36fFGI5vPOZbfMjyXDupUK5zJlBnhyHGHw4eLLn+iG3mdpKn4rv+Jg97g6q4wYCecUIb+1EAIdJCnElW+VOflYYskWybSVaBOrlB3d/BOITNQLxgMfAXlR8x8diTjfs0T+eRCCHc9Lhe5IA7nUWWLTrhsu59zInhCf6yNPPJ//r+PLpPnL/axmcx+JOq7GV/hjWd3bPq/ntjf9FUYXbWyvL7I5mIJDDOnmBm+o3xvXhX/7jF4WUmbfME20rRZNTEucGX+fv2pna6VN4Yv8d/m2yHG0ro3GM3EG7SgqBHI0yKkyPcwKmIYV4Obi6LJiM4uW0reQs3DTmkwfjD0V+24q+qhQDesntRtgcjWPkhocs5swikNegilDp6gmYpw//ypde9ISXnH9shO7sc3TI+EPj+sH3w4DuJarkYduK+o+2FauprfTPu34Qiqzv7F5hMaczqI7nIJADI+VvAAO7+D2+Ur7i36m80YYJ47etFE9bEXElXZ99dPCO6B/t88yyFxXgYix8dQc7c+YgkAMJXs4JLpBycC1boZM5M8WHt60kFncmNgnykpsEpavkuqVl/51v8XyzF6Ezx/rO7jm18LVxvxjqcIvFnPkI5HBUXvAmfLvqw7/yrz8opHwpvPu5rSfh90a0reQu7szrNU/eaNS2crj/tr+lPqykttInlGfxzoE7qI4XIJCjIYoCcl0nIBCMo+t8Ph2ki9tWRkxbKRhvmGhbMbbSTyzu9Cv1fXG4/yaPjr0I5FkEcjeoxZx3XT8IRQjkzpl18B33BMyLvD18Mdmk01ZEtJV+YdtKouc8r23ldZ4N9rrETPLY+s7uqnrnoCm/D2rFYs4hCOSVa2rgpSUDSFv7lfs3pRQX8g5MJoQX7bSpL528yPC2lXgsYur2ddtKv38gjg4f83jZ6TRV8gSq4+5gZ84hCOQAnKTCuPDMHTkLQvLEbStmxTuuhMdtK3GVPLO7p/HjDh6z7sliBPKgOn6mcFdc2ObO1sryAx7VYgRyAM4xw/h44+/T01bMXnDja/P2oq89fQvhHgUip0puhPhwJvn+myzutJfaSv+c6weBFyZOYTHnCIuN/u0AoEJB765UYbx4xJrfOiKDT/2qthzxC3hx0dvsD09dP4zug+j7g6hKri7j6V5zEV5eev7OncdPPsdTwE6X6KkVVxvwO6B+ajEn7SojUCEH4IRgl0R5d/i84/zFm2HiHncmeaJKnru4U8RV8sTPiKvkCos7reZ0GF3f2VW7lnYb8KugflTHx0AgB2C9tY3eVR3GcwNAsm0lp5e8QNHizqKF1GGgl1EYNzYKMtpghA7sg8ERizvtddbxrfRZzOkOAvkYaFkBYC3dp6v+Mbhg9JVMJG47iSvY2TaWsG0lPj/sfPEvH35PhW9p/h5hYJe5rTJ+L/njR2Jx6SRPUjtdcbhSTiB3A4s5x0QgB2AdPedZBZ2Xk/etXCiPw7KMK+hSxrfnB20ZLdyURjAPLxueL/V5Uvece7pinr698PdUiztPyncJz+MNTQs5GcjXd3avDJ/9D4vQOz4m/oYHYA1VEV/b6F0TQjzIhvHhst0n5dtWPM9LtK14qYWe4TnmRkHpnTsTE1ee7PEktdNpR7fSpzruhr2tlWXaVcZEhRxA661t9Fb1P/IVzTROVtLjthMRLe6M2lCiqnZHdX3r6rheBBoVvsNgHtyE1O0rQZXcS14unNYShnUZLO5k2oq1LrlURVzf2T0XtJDBAYTxCRDIAbSSXhB3RQeaCbbeLm5bMdq4R1w/fT2jTSVxI/lV9qBHXAT/7193oNteRDwCUcrocuHiTnrJrXRZLTre3uy6shMU1XF3uD7WcyIEcgCtoAP4qnGqpQc1ztPJhZrJqnhBldxcAhqG6sLFnaojJa6SB2RUJY+K5epn6ZnkBHJrXXKomkggd8M9FnNOhkAOoDH0YkwVvMOP5/SpYW9xF1TJhbE3UHqjILUoU/bjaroX9ojreSqe/ihFtj1GLe588oY4+fR3sLjTTldcCOTrO7sTvpuFFqNdZUKeHP3+LCawttG7S3+c1XpCCFfeWp6Vc/P5R7r4777kX4sycYaMvtZNJ8b29tHnMuwll8mP6nx9/eBr9dUg/l7mMoP4dqUUJ57+t+glt9fz25tdqyuK6zu7N6tb54EGU4s5z/AATYYKOTAZdpZzwHi95FruhfO205e5lzXnnAdtKnGV3P9e1JvO4k7LqSr5NVvv4vrO7hnCuDMYdVgC730CwATi7fPz21aiz7PfjccbFm6nL1PXTI5AlIM+O3fay/beanrH3cFizhII5AAcNXzOeJyth22lL42ALox+cSOY657v+CLZ7fTVZWQY2HVQz91O3xPMJLeX7VvpE8jd0NtaWb7v+kEog0AOABOKN/oZViVPB3lvjCq5l1oI6mWq5IdP3kz0rcMqVu7aub6ze552P2dQHS+JQA7AYePtxplbJY++lomdOJNV7vCiXvIqOVVyEW6hP1aV/A2etHaydddOK19oIGOP/vHyCOQAUGDY7vleOsxnquHCCPJmRT2/Sh7eYlglj8Yb5lTJDx6/zkNmJ1u30rf1hQaSbm+tLDOFrCQCOQDHTVsl93Kq5GKMKnnyr99klbwTTWXJq5IP+kcs7rSXVb3W6zu7V+raxAuNQ7vKFAjkADBEpko+tGw+SZVcJBeEJqrkyctlquRC9ZLTtmKpi3qDLFuwmNMND1nMOR0COQBMUiVPfOUlquTBmdkqen6V3Iuq5NH5RpXc8zx90/lV8oP9N1jcaS8rWjzWd3YbuMsuakJ1fEoEcgAYYVhR3JTbthJ8lqmSR4XxVJXcS9xKukpuUL3kVMltZcsiSKrj7mCr/CkRyAFgIsle8twRiOm55MNq8J5R/Q7r7DkTV8xb8Rd8qir5Y9ZPWaq7ttE7Z8FdI5C74RaLOadHIAcA37htKzkKRyCKVKCONwrKTFyJztX/hS0r4bb65lQWfY5a3Nk/2ufhs1Orq+TrO7uq7eZsA34V1I/qeAUI5AAwhmTHyPAqee7uncZ5uXPJMyMQh1fJo15yquS2ansfOdVxN6jFnHddPwhVIJADQKSaKnn2W8kRiIVzyY3bytu9M69KfnjwNos77aS20l9t4z1b39lVU2IuNuBXQf1YzFkRAjkAJBSH8vGr5HKMKnkneZteNmyry4yqkqswfrj/Fg+hndpaZaY67g525qwIgRwAJjB04sqQbyaq5Jl55V72hcAEVXLaVqzV1rYVtsp3w52tleUHrh+EqhDIAaC0nCp54e6dnnmp4LNUlTwvbGcmrpg/TYf8fv+AxZ12Ulvpt6ravL6ze57FnM5gMWeFCOQAkDG8l3zcueS5F07szBmdmdgoKHnZaFug5Hb6qd0796mS26ptVXKq425QizlpV6kQgRwAKpQOyyZzo6D83TuzVfLwm5nt9JM3LI4O3uZhtNPFtswk14s5rdhlFCNRHa8YgRwAco1bJfeGlMwLFneGgT21e2fiho3Fn8kRiCJRJY82FJIDdu60V1tCrvo9Tzfg90D9COQVI5ADQMXGqpJ7eVXy5AhEc/dOr7BKHgf3w30CuaXa0kfOdBU3sJizBgRyAChUT5XcbF3JDe66Kh7fev5GQekq+dHhEzHoH/Jw2kdtpX++yfdqfWdXtdVcaMCvgvrRO14DAjkA1GBYldxsT0lWyb1EBd3cvTNZJRepFwFxlZzFndZqevWZxZxu2NtaWaZdpQYEcgAYatyRKpNUyUVqhKHIaUPxRlTJ43PNKvnh/ps8nHZqeh85izndQBivCYEcAKYwbARicvfO7HeDD51sD3ne7p2ZKnnB7p1CsLjTTmor/UaG3vWd3UvMHncGW+XXhEAOAFUqmjue2Sgojxmu86vk4S1Fc8lzquSMQLRWU6vQLOZ0wz0Wc9aHQA4AI02wuFOMKpvnta1k212S+wYlxyV60VnZ3TuFH8jfYXGnnS6tbfTONOme6dnjFxvwq6B+tKvUiEAOADXKXdyZM5c8PQIxvXtn3nb6wXnG7p3h5TyPXnI7nW5glZzquBv2mK5SLwI5AIyliip5tm1l2AjE9O6d8ZlBGJdGa4v5PeEv7nyLh9VOTQvATFdxw+2tlWVGONWIQA4AlUuF7lTYLtq9M66SdzLfE6kquVETT+7eqS83GBzRS26nC03ZSn99Z/c8izmdwWLOmhHIAWBs41bJi84QeiFm+mLZXvLc3TuNKrkMf6BHldxBTWlboTruht7WyvJ91w9C3QjkADCRCeaSJ74yw3N2987gQ3KmSvp7It1LPqJKfnjwtpBywMNrn7kHYb2Yk9njbqA6PgMEcgCo0LABK8OUqZJHX0d95Z3oe2GfOYs7rXS2AVvpX9KLTGE3FnPOCIEcACY2wQJPc8zhJFXyxALP/Cq5OQYxmktuBnXhsUmQvea9uJN2FTewmHNGCOQAMBfZUG9WydNjEBNV8uwVo7nk6duVgyPRP3rCQ2yfuQXy9Z1dtai0a/GxRYzZ4zNCIAeAWhVVyUXOGMQxNxYyduUM562EIxATveRRlZy2FQudnuNW+lTH3fBwa2X5rusHYVYI5ABQyoQTV8a8cPFc8niaSmKrfD1xxUtXyY0FnkcHb7G4007zCuRsBuQGFnPOEIEcAGZhVC+58d3gQ17bSnRG4hfOrZKnxiAyk9xKl2e9lf76zi6LOd1Bu8oMEcgBoLQJd+80v5c+r+IqeXh+eDnaVqw16yo51XE33GIx52wRyAFgVtJ9LEOq5HGgDi+arZInp5Ynq+T+bXrxX/GD/oHo9w94qO0zs35uvZjzokPH1mVUx2eMQA4AUylfJR9y4WRVvKBKnljgmdtLrsYgdqIq+SEjEG3UneFW+mwE5AYWc84BgRwAZmnsXnIxukou8qvkUYU91bpydPAOizvtNKs2EqaruIHq+BwQyAFgauW208+/SN5liqrk8XXMKnnwMQ764WWlkH4oh3VqD+TrO7uraodQnjpOIJDPAYEcAGo2dKx4ejfO1HeDD5NPXPGibyWr5If7tK1YaBZb6bOY0w13tlaWH7h+EOaBQA4AlZigSp67uFPkbKdvTlzJbqef2L3T2E7frJIHl4mr5P3+oRgMjnjI7VNbO8n6zu4Z+sedQXV8TgjkADADmSp5updcf5b9fhi0O5kqeXpnT3P3zjCwB60rHZ3lO7pKzghEC9UZmJk97ga1mPO26wdhXgjkAFCZKXrJC7fTH1YlF5kqudmeUtS6Qh+5lercSp/FnG6gOj5HBHIAmJFkldwbWiVPtq6MqpJ7/vcSwuCes8BTTVo53H+Lh90+lfd5+7PHpey6fmAdQSCfIwI5AFRq3Cp5DqNKnpa3e2d6gWeiSi5E8nKe0boiqJJb6mINW+lTHXfDPRZzzheBHAAqVxzKx6+Spxd4ZieuZMYghpsApfrJs60rwt+1Uw76PPT2qbpKHtyelMEJtqI6PmcEcgBoknQAN2Sr5AVjEM3vRVXyjjF1JQjlhwdv89Dbp7JAvr6ze0VImVzMSSi30d7WyjKBfM4I5AAwY+NNXBE5rSvZ2njelvrp0YnhLXmJfnJPHB3StmKh6rbSlzJ/kSih3DaE8QYgkANALYb3kpvb3w/5Zv5ccmPBpiiqkovkDp55rSuqZaV/9ISH3z5T9337izmFuCiLwjeh3CbXXT8ATUAgB4CG8UR6q3zTGL3kUfQ2rxZvGBS2rKiPtK1YqYrxh1dGhm5CuQ1YzNkQBHIAqM0EVfLC/fWH7d5pTlpJV8k7makrnj8aMVlhHxzts7jTPmor/dWp7pWUfi+6v7xYSkGl3Fq0qzQEgRwAGmjcKnn8MRvSc0O5iMN4OMuFXnILSfli2Tu1vrO7KoU8K3OeernBnFDeVntCCHbmbAgCOQDUquYq+bDNgpI/INFPHk5eUecdHdJHbh3Pu1j6LsnBlXDMoQrl0bNJB29CuTVub60sP3L9IDQFgRwAGipZJc9OXBm9WVDB1BUjlPsnOfDnksMqaiv9iUcgru/sqo2FLsfPjSCUx8+6IQjlbcNizgYhkANA7aqokmcnroxa4Dmsn1wY1XIVo/pUyS0k/+ak90kOBn9TDlLBWodyM5jTU956va2V5fuuH4QmIZADQIMN7yUfvllQsp/cy4Zy43wVyAtDFlrK+xslZpK/5P9/9FzQz5WwXcWLn4k8X1qN6njDEMgBoGkm6CUfXiUXcVuKeb2cUK5O/cPHPBVsI8evkq/v7J6Xg0FXhu1ReaHc6CsX9JO3FYs5G4hADgAzMeFGQbm7d3p5VygYg9hJXTReyBme6aWC+dERgdw63vhb6ct+/0V/rYL/v+C/ZCiP36kxF3sSyluHxZwNRCAHgMYZtnunzG76kzsG0QzlXiLwe0ZPuRnM5WAgBizutIz33rWN3vkx79Pl4IOM1hAnQ7mWE7YJ5a3C7PEGIpADwMyMWyUXmQWe6V7ykWMQh/WTi3hBZzqY948I5NYZYyb5+s7ulUG/fzoe5iOTg31kqlpuLPSkfaVVHm6tLN91/SA0EYEcAFonCDnJUJ4M3HEo93JCedhT3jFGIAaX7/f3c0YsotW80Vvpy37f7zX3Q3UqlEftK0JkQjlah8WcDUUgB4CZqqpKnheGkjt3Fody47I6mIdtLP7EFarklvGW1zZ6haF8fWf33KDf/xvBc0pvkx8Fcxkv5pRGX7kfxj2R3jyIKnnj0a7SUARyAGglL3fqirloU4jk5JV0pdwzWmDMinn/aJ+nhGWkHPytonukFnPKQd8I2romLtP943HFPPgyDOX6GmH7ig7vyR+S04uOWbvFYs7mIpADwMxVUSUXY/STF7WsiMTXmWAu5ddoW7GL53kX1zZ6Z/Lu1KDfv5II0WF13JM6n+e3sUSX9WV39aRa3jhUxxuMQA4AczFJKE99L3Hd/NaV8UN5eJ4f2r7W8bz/8L//xy8sC+Hd4XlhE+9ZKQeZmeTrO7uX5OBo2X8ChG0pZsuKDuWZ3nKRF8r1lyz0bCIWczYcgRwA2iAdokdUybOhXBQsAPW/fMPzvP+6s7DY/b3feOET+lyqafbJTFsZHOz/LX+rfJkM1+lQHgRzI5TLVCj3TbDQk1A+a/x5bjgCOQDMzYSbBZnfSwTwonDjpcYhZirlKoj/o05n4dzvffwn/rPPvfL+18Nrbm92b+sd/WAJz+v8hLmV/vrO7plBv78eLeTME4bwqFqeE97TGwiNs5unIJTPGIG84RZdPwAA0A5eOMYi+m1VwJbRwBVpfJ2sWgbdCDII8ME6vK95QvyG8LxPmSE8h/pH/CWeIPaQsq8Wd/66ukPy6OhF2T+KXtglNspXG0UZwTtaZ+CH8nCCTxjUg1DuybhFKgjlXnCeDuXZVinMyJ2tleUHHOxmI5ADwFwVjTAMeOkugMwZ0TeSoVwkF9x5wbd3hSf/y8+98v5PjXmPrxPI7eJ5nZfCQD44OnxRhi/mwhdyfhCPQ3nID9T+50Eo90n9ebIcPlkojy6PGlEdbwGv8K0klLK20VOLJi5w9ACMb/jfw8m/prPj4/K2N0+NpvuiHBx+7HPX3/+/TPqg8Heald639B88Jw7feuNLUo8uDDJ0zkLgodN7UmsZPGPBsX4FGO0Ya7SfZ0I5gbxOajHnufn9eIyLCjkAzN0kVfJhrStRs6/6b08I+fuDwdG1z11//1emuIc3CeR2kYOjXxwc7J8e9Ps6dAvdhmI8B/VzLl7G4MUVbv2N6Dpe3Lsiw9n4iRuJautBO3q6Uk6VvE5Ux1uCQA4ALTCqdcVoVfmykOLjg8HB50f0h49le7N7c22jp1pXTvM8sYPXWfj5/uGhf1+iVpTo6WQEc+Mplu4rj69jhPKw5aWgn1wYlXJC+cwQyFuCQA4ArWO0AwQBaU8KecsT3s3f+dUf+lIN94bFnVbxnh386YEQ32GEbk8mquXBeoSYNEJ5QrTIc3QoT1fKUbt7LOZsDwI5ADTC6JiSs57zM8Lzbv/Of/O+z9d8D1jcaRnvG0IMviMoV5vDM+PpKTpUG9+UqUq5ucgzb/JKcD2j8m0s8vSoks8C1fEWIZADQGOMFcrvSCnv9I8e366iJWUc25vdB2sbvXv0ktvD+/88Ib57IMRSWM324qXAKih3OkEo1/3iRqbOBvgolIcLNoPJK9JL9ZOH1zMGtWQQyquyt7WyTCBvEQI5ADSb2pznrgrhntf5/PZm99GcflsWd1rG+wtPyH9Hb+7jh2RjceZgEIRyYVTLhdl9omeXm5VyYQZqY5FnPF4lE7iZT14bwnjLEMgBoFH8MPNQSHFXtaPoHTPnjsWd9vF2PTH4zr4fkHWXitHCohdjRoG5kw3l+oiYrS6F/eSpySth6woLPGtz3dL7ZS0COQA0g2oJUeH77vbm+fsNfUxY3GkR7y1PeI89IU9Iv73ED+aeF+/3MxBRG4unNwAyQ3miDSWslHfExDt55navEMqnwWLOFiKQA8B8qAB+Nwjg3bsteQxY3GkZ7888MXh+kOgh9zJ93jJuYTFCebDoM73zpsjtJ8/dyVPLXeCJadCu0kIEcgCo354O3/dbFsATWNxpH+/PO0KcO9QR24t2whdiIETYQx6eL1UoD9pXdLNJ8eQVkeonzyzyTE5dyUWVvIw9/U4bWoZADgDVu6fDdxjAbXr7mMWdFvGeeMJ7syPkU0EvuYzK454Q/UEwQKXTidtY/N7xge4KH+iFm55/HS/cOChsfRHhPHMval9JVN69ZOuK/3l6a31C+aRub60sz2vhN6ZAIAeA8h4awds/WRa+M1jcaZ/Ony6Io+/pB+MOZVwADyevhO0qUShPDejMTF+RMjESMZy3EgRwEVfKpcyG8jyE8kmwmLOlCOQAMNyeDtsP9Mn/fHuz29SFl7Og3hK/bP/ddEPntY4Qg4GukHvCG8QjVDKhPLP3j7nQ04t7wc1QnljoaYxDFMmQHU55oZ+8UqMRrQAAIABJREFUtN7WyrLLfy+1GoEcgOt6QohHRuB+pEO3aGuv9wxcJ5Bb5MgT3msLQn57379PUgfqaB3msFAeNZ3LoO88tWAzuAFh9qlkdu80RySGt8QoxFKojrcYgRxA24UV7LT7OlyHzK8f2N5aUif17sDaRk+9kOnaey/dsvD1RXH4bUdBz7fuIU/sgB+GcimTFXI9kNyvgHthH3hOlVwYtxf1k2fnk2dGKRLKx8VizpYjkFdse7O7atUdAoB8qhp3g2Njh863FoU4lNFW+mEwl52O8FQQ7qh2lo7wBjpI60q58Ntb9NcDvYu+v+izE4XyqALeEclxiOZOnuHOn8aiz6KWcuRiMWfLday+dwCAutzWVTlYwg/lKlX7Jz3UcDCIg7eufod93iI8CV29FsYuP3qXT6Er3cEnwris8TGSrX7LzGVQgNnjLUcgBwBMbHuz+4i3yO2y+GfH/AAchO28UD7IhPLgcxkHdGF8FKlQLsPzkuVvKZLBXnrJvYQSCOh5Hm6tLLPepeUI5ACAslhEZhHv7QUhnujWERWMB/3iUK4DuxnGg+sMjFBvVMKNirk+M/5egkfonhx/Di1AIAcAlKJHP/Y4evZY/LPjcaBWeVmFch2y06FcVdFlFNBlMkhLkWxpMaeqjKqSh+eF+wkR0EehXcUCBHIAwDSozllk4fUl3a6SbjcZJCvlUQg3+8n1+Sqkh6FbyES/eRSuPSORZ/L2iCo5Ad10i8WcdiCQAwCmweJOi3j7HdHZW4x6wZOhXCR7xkW2n1wawTzqJ0+3q0RBPgzj+mfkVMnjqxDCC1AdtwSBHABQGos77bPwzeNCDmSmUh4t9NTnh5NXwsuJdCVcxlVys2c8qph7yfOTwi31Wdw5BIs5LUIgBwBMi7YViyy8fszfdTOoYAdjEKUcJBd6SqOvPAzf4YLOdBU9d1GnMZDF/Jrp45OgOm4RAjkAYCos7rSL1/fE4jeOG6Fc5lbKw504zX7yuEpuLuwMD09BlTxK5elqebKXnLaVDAK5RQjkAIAqUCW3yMKj4zoMm6HcHGk4GNlPXqpKHp1vBHHaVvLc2VpZftC8XwtlEcgBAFWgj9wifiA/8nJCuYxD+cDoHU/s5Jnc1dNXVCWPzo4nriTbVpJRnCp5hOq4ZQjkAICp6cWdtziS9lj85gl/cae/wDPRUx6H8qjyLeIqejT60OgtHzpxJTGXPC+ks7gzRS3m5AWwZQjkAICqULWzyOJrJ+NWlf7AX9Apw82A1OcDfZ469cPTQJ8fXGcQXi46X0aLRBPBPTUyUQqj2p6auJJte3EulBPGLUQgBwBUYnuzq0awPeRo2qHzeFF4Bwtx5TpsUwmr5UIO6SkXifaVKHAbwTs54zxY4CmN1pVIGMoRYr2GhQjkAIAqERYssvQXp+LKddRaoltYomq3Ud0WIg7uRvBOTmERedtzpvrNZbaffFiV3B33WMxpJwI5AKBKtK1YZGHvRLKdROiecl0pjyvgIgrnUU+5SC7yzE5dGeRWyXNWgiLGny9LEcgBAJVhcaddOgcLovPmsWwoD3u981pXUpNXosEqxtSVRANKYpHnsDGIXnG/uBsV872tlWUCuaUI5ACAqhEaLLL0+qlM/3ecjfNaVwaZKnncGx7u6ClS1fXsfPLwY3r3TumFV3Gugs6fK4sRyAEAlWJxp10WVdtKtAgznEGuW0vM1hURt59ErSqDZMtKzAjsfquKN1HbiqNLPFmfYTECOQCgDoQHS3j9jl8lz4TyqGVFGC0s+oxBskoezS5P9JQbxyevbSW3Su5s20qPxZx2I5ADAOrA2+sWWdSLOxOhfGB+TLauiLClxJ9ZHm4cFE9ZSQf7kExV0RMfU9vpC7faVniBazkCOQCgcizutMviGyeFt7+QCuVmyE61o5jhWaS23RfJangmmEczyYcfQofaVvbYDMh+BHIAQF2okltEhXKZ6iWJK93CqJJnxyAmRiAKM8QX7Lo5tIXcuQ7y21sry48a8HugRgRyAEAtWNxpF7+PXMRV8UyV3FjgmaiEp0cg5u3UGc1D9OLbNRd3hn3kOVNZEm0rdraw0K7iAAI5AKBOhAlLLDw5JhYeL8XzxM12E//coHIdfGn0lIvsCMTM4k6Z07aSKKJng3a4a6fl1GLO+64/91xAIAcA1IneV4ssvf6Unp4iE2E8Cs2JMYjhDpzpKrlMVcnZmXMIXtA6gkAOAKjN9mZXjWq7wxG2g+ojN8cYhqE6nE2e2MFTbRAkRGqjoILcbQb01OLO/LaVIbVxu9pWeEHrCAI5AKBuLO60ROdwUSy+cSqnqh3viR8u8Ix6yVMtKrltK4nbSk5xKczX6jbsblu5xWJOdxDIAQC12t7s3mZxpz38KnnYJ55TJY/bVVJTU2S6ZcW8bt74RENBH3nI0nnkvJB1CIEcADALhAtLLL15Soh+xyiOy1RgDnvJjfN0+4rZtpKcSW7s6ilSizwTW+kbP9PuJZ0Pt1aW7zbg98CMEMgBALNAILeEv5X+Gyd0kVxVyfVpIMVg0A/OU/3k/ud9IftHYuCfF37dF1L2/dAuw1Nft7iE1zM2Egp6042Wl0S7SzzfxbLxhyzmdAyBHABQOxZ32mXxzaeMRZvpUYXJzX+ihZ7RuERpbKdvzDbMC9GJeePRZ9mL6V5yi0I5L2AdQyAHAMwKIcMSqm1FLfCMpLbET+/gGY1GNOeSJyarmNcxquPhRkHpHTztxmJOBxHIAQAzweJOuyypaSt+wDar0UY/eWohpzRGJaa3009Uz81+dLPKnTcCMfiGbYeWUYcOIpADAGaJKrkljn3rdDIwS5mscgsR9pHoi6XaSaJg7sVtKwmpUC5z2lbs20pfLeYkkDuIQA4AmCUCuSVUy4raTj+qkof/n9ilM1xyGc8ljyaupMO0uXOn2cYStq2EiiYj2jGTnD8fjiKQAwBmhsWddlnaeyY7azz83GxDEfFHKdLjDs3JKan2F5FXBc9L5Nbs3EkgdxSBHAAwa4QOSxx79ExwR8wqudG2Yla8481/jPA+iHvMRXj9vAwdtcDkVMrt2RToztbK8oMG/B6YAwI5AGCmWNxpD2/QEUtqBGKooIid7f0epIK0lz82MXNDydsyJ7sU9pG3By9UHUYgBwDMA+HDEotq585EADbaT6KPItlHHl1SpFO2cRsicXnL+8hZzOk4AjkAYB4I5JY4tveMv3tnPAIxvF/mqMPsJkHR+YN0H/mQmeNlt9JvfsWcMO44AjkAYOb04s57HHk7LL0Vt60k55Inzo0/T/d/y1Qvearinr6p5NhzK3rI2SrfcQRyAMC8UCW3xNIjPW0l3E5fiHjxppBGiM4ZfxhdwYuul7tr5zhVbnXZ9rWt3GMxJwjkAIC52N7sqkC+x9Fvv8V3ThRspS+HLrA0xx9Gu3lmI7r+Im8e+ZDbbs/CTl6YgkAOAJgrwoglEtNWUjJ95ObCz8Egbj1JzTRPTGcx21kKt9Fvnb2tlWX+DIBADgCYK3pnLRFtpR8t7jRmjvtkom0l+J5ucYlaUuJt9JNtK6ljlDuYJb6+zOtZaWbFnDAOH4EcADA3LO60R7SVfkSmWlLy72qiSSVnwooXXqqwj7zVizp5QQofgRwAMG9UCS0RVckTUpv3GAs1k9VvY4dPYxv95P5BXhzMveKQL3SQb3gfeY/FnAgRyAEAc8XiTntEfeSDfhCkBwMh1ak/EAN1nv560O8L2Q+/1p/3B9H3g+8Z31d95oPgvGjqij+/fJAK+APdthJU3jOhfNxpLbNBdRwRAjkAoAmokltAbaW/GIbysJc8nKaSycGD7Fb60Sm6YiRx9dzNg/JmmIdnNa5SvsdmQDARyAEATUC10BLH9p5O3ZGcTYHM7fONcYfRVvoiOwIxbmGRiRGIw7J2g2eS395aWX7UgN8DDUEgBwDMHYs77aHaVvyt9EMy80nY4B2naS+nGp7exdOU3tGzfes6eQGKBAI5AKApaFuxhL+Vfrp326iGC7O6nWhRCXrDk2E83rkzV2omeSxZG8/0ks+PWsx53/XnCJII5ACARmBxpz38aStaXoE8OUfc2EpfFu7TGVzSDOZGdTxxW+lNhHJvaa6ojiODQA4AaBKq5BZQ88j9rfTDjX/MnTkTgXpQPFtcZkcgetG3ZMFW+jm31LwmchZzIoNADgBoEgK5JY49eia+I5kWcHNRp16saVa3ZfpK4VhDkVMhzxnJ0ly3WMyJPARyAEBjbG92VW9tj0ek/Zb2nkneh8SW+MbCzuCbyW32w9aV9BjEIl7OBcKt9IvMp4+cF5zIRSAHADQNPbYWUC0ri2+fKL4j0eLOQeb8OIyLZNuKiGeVJ7bSl+lsn1zAGY4/nPM88odbK8t35/kLoLkI5ACAprnN4k47LD16OrlBkNmO4v/PC78RLeyMw3R6sorMtqfk9pE3tnWFF5ooRCAHADTK9mb3EQvf7BBtpe8z9u1MzRgPe8OjwB5Wx0W2bSVR5DZvJ69tpVloV0EhAjkAoImoJlpAbaV/7JHeuTNvYafZ4p0O2ukgHgX5sFKevkHjRsK2lbCPXLetZMyuhYXFnBiKQA4AaBwWd9pj0aySy5zFm/7nAyNMD0Rq0/xM77eMrpvcxXNUvp5jHznv+GCoRQ7P+NY2epMuxri/vdm9Os/fGQBaTFXJb/AAttvSm6eEdxQnDul3juu98sPVliIO2J6XLJv7l0+3jqeOSN71GrQdkFrMSSDHUATyyVxo0y8LAC13W4fy0zyQ7XZs72mx/+1vGRHZCMxh1Tz8MgzgMhvY/W9IHemzqTx439+8TsQbPQaxPvSOYyRaVgAAjcTiTnssRZsEme0lyXnk0aY/RjtLZg55uEvnJH3kOZKTWWpvYSGQYyQCOQCgyVjcaQG1lb46iVTrSdgDbo4/DD4OjIvFGwplArYZ3jOfZsey5BbP63Vna2X5gdMPPsZCIAcANBaLO+2x9PpTQUQeDIRUCzcH4UkG5/WPhBz0/dNgMBAD9XW/738/urz/tfpoXr+vt9WX/td+eB/E4xOT01bErDcJojqOsRDIAQBNR5XcAmpxZ75U+4jZyhKeNzBaV/JaVYRZXU+V4dPfz5Oa1lIRFnNibARyAEDTsXOnBdRW+ktvnDDaUOKP0gjZ0tgYyG9dyQvKRb3kUZhP7t6Z3ko//rTWKjlhHGMjkAMAGo3FnfaIZpLLOBjnL7CMd/OMO8elsTmQcZW8oyNzesnNb8+ml5x3djA2AjkAoA3oxbXA0hunhNc3okdi9x+hF3fGVXEpjDaVQTx1JeoLN9pYZG7AzztmM1nWeY/FnJgEgRwA0Hjbm121MdtDHql2U1vpm73kUeBOtZwk2laESLWtePnVdVM4szx3K/0hqmth4QUkJkIgBwC0BS0AFlh6FG6ln+zl9sO1l7MoMz0CUcrU1QsWcQ7L1+rn1de2sre1skwgx0QI5ACAtiDkWGDx7RPCOzQ3Ci+YsmJUwOMWFZGcSZ6YZx7PNU/fbEHvSuJnVIjnKSZGIAcAtIJe3HmLR6v9VC+5ubAzIHP6yGUUtoOLpLcGCgK4F34eXUwaW+1PeLimD+i8k4OJEcgBAG1C9dECx157Jr4T6bHiiT7y5PlSGFV0oyo+PEPn9ZF7VfaLm3os5kQZBHIAQGuwuNMOaia5v5V+2I4yZPxh8GGQut/p7m+ZaXcxr57zRXBO9U3kVMdRyiKHDdNY2+idF0KcMW7ikd7quvXWNnrqfp037sd9/ZZ5o+U8Jo3/vY3fOf27p9216TmG0lToeYXD125Lj54W/ZOv6/sQVK1VKPc6unrtqRC+EJzneX5w94zNgIJCt2pX8cxb0Denru/Fn4riaYfhNvqeN3U632NePsryat6lyiprG71JD9a97c3uatE3dQi5JIRY1UHkdM7F1B/w+/p0d3uzO/M/7DqYhr+j+nhOCHF2jKuqKtYDHaLC37+xwXBto3dJPx7qfnaHXPRheH/UX77bm925vD25ttE7Z/y+o37n0D39mNxvyO+uThdK3sw94zEgoDtE/530uuvHoe3kwkC8+b1fE8LrBGHY84SnPleBXH9UX4vOgv58wb+ct7AgRCe4jqc+6pNIXDdoAAhutxNk8+D/gv95ukHAi9vME4G8XDi/tbWyfMX1xxXlEMgnUFUgX9voqT+w18YMtWnhK/BrdYcpHVDV73qxwpvt6R7Qm9OG87WN3t0Jw9zHtje713Ju55q+n2UeD6GDobo/tfe26iCiHperYwbwUR4aj0ft4Vw/96v63U0P9Z8J+osdsbbRU4/1ZdePQ9u9s/wNcXT6SVDl9gO2DuH6c6FC+EJHB/WFKISLhYUovPsfFzpx8NaXCwK+J4S6jL79KJBHXwcV9ooC+fu2VpYpDqAUAvkEpg3kuip4c4qKYNrHdQiptOqsg/j1KQLquG5N88Ji2kCu36G4WWE4VMH8al3V2rWN3lX9Qi7vnZQqTPV4jPjdV/Wxrvs5RTB3hH5Over6cWi7o2feEe+c/WaiOp4J5Oq8MGR3dDDvdHT13BOdzkIQujvh9TrxbXhxEA8+D8K2Gcj9j/pf9ylCuVrMeX6MywG5WNQ5I/ofj/sVhnHlJXWbOlhOTVVf1zZ6qvr++RkEJ6GrW19VlS5d+Z0Z/aLjbsWVWvXYfklXgSujHt+1jd593TNbVxgX+vG4r4N/JfRz6qYOTrN4TqmfcUO9WJv1cwqzxeJOOyy+aW6lL42FneHkFL0pkEyNPxTx9vnmIERPGAtCpRxjxrhn/P9UKAJgKgTyGdAB7dWawtTZKkKgDi93K25PGZcKgneremExiv45n68x3N6oKpTr26n6hcMw6pi8ol6YTRtojefUPNoK1IujB7N6TmFumGhhgcU3TibuRCZEh197qa/TlzHGH2YmtqS20a8BgRxTIZDXTAeCWfyjUToEGsFpVqEvj/rZU4fAUXTb0N06f4Z2Q1fhp/ld1eN5o+aqeJGL+kVSqcdDH+cHc35OnZ7lCz3MBSHIAtFM8tQeQYmQHVbHpd4waGDs3BnNLU8PLk/eXiKjJ7bgz+4Mmj5/BLWYs/ETuNBsBPJ6hUF3VoHqesnwcXvOwSl0dgYjo27P8PEo3YpjhPF56pZ5Manv8yyP8zBhKD/XgN8FFWPnTjuoeeSd/U4QkgdSyMFASB281edC9oPzBv2gdWUQfC305WR/oL/W1/U/76duQ+/6OciZVT49XhhiagTyenVnHEpOT1pl1v3CVfa1T+uC7revQx3TPYY5rX/mRPSLqnmH8dDlEu+8VLlQtgoT/7lAqzD32QLHXns20w8uo8q3SJwn9eX0d4P/0tcVItrFUy3OzGuDMXft9D/34pnk5uVGeLi1sjyLd11hOQK5fc7qSRwj6YAy1mVnrLJFhSnzqNhOdF+M6nKTXB83zOoXePNYhzBKt6HPdUxJ783A4s6WK+wjj/JwXOWOzjdbVsz2k2jxZ6olJd1LHv+w4l2DxMhQzjoGVIJAbqeXxqwyX2lIW0HaRYuqmacn7CUvO5++TmNV+nVbSJND77h/LtA+tAy0nNpKf/HtE/pOFCzqzPlW/D0v1UtewOxYkSJRVU/e7NhtLTz3UAm2zrfXNb2r5jBlJ4GEmxOp0wNz7raxBXq4C2PZcLk640pxL9yW3Tgv3KF02vaLS+PcFx1oX5ryZwk9D/2+vi/hdvTTtiVdGSNs36zgBd4dY2dXU7hL7LTV9+v6tmAX9dx7mce03ZZef0ocPb1v3Aejci2l3rwnaE/x/P5wT0jPM0YdesZVwk9kHNZHzRVXP0Pdnhx7EMsdFnOiKgTy+XhoBNr74cY+uiocbqc/bfXa78XWs3ozdPgrEzRV2LtUtBmREc7Vz72qWxheKfFzzs8okI/cDEdXVa9PEczHDYDTVJf3dBX7dt5jY+zweb3k8+qsqvTr9oAMfYymCf2jNrm6a7TOXJ0ifHVVTzwbB9lF/fld2+jdaWi7FMa0+ObJYCb5gjRyuAw2CBoqbkNRsd2TXnxd3R8ebqUf8XP6iFaV0fh7BJUhkM/Wng4duT1nOozc1VMhrumANk3F9MqQEX9l3rrvmTuPjkPdVx2iJg1Qs6hivjhOMFMvanTgLDsacuR19AuksvO6VXV/ddiOrfp7N/XupmWn6gyr9Jd9MbGnX+CNtShK349regOrshOMrvEPqZVuEsjbTYVx1Ut+9Nw7UTuJv3NmNIdcVcU7uuAdhHDP7xdXlfKgwu2Fu2+anwszoJvNuhOE8WyFXS3mZEExKkMP+ezs6dA01gIQFTy2N7uqEvjiFL/h5SG92GUCb9nFlmUWvdTdQz5WGA/pILiqH8eJjdETX3Zm+cgwnrofD/TPKnM/cl+M6RcTZavjhe/iDKPfiSn7eJyddkY8mofFnXZYSi3uDEkzPEsZd6MULuhMrcUs6kMP+8ilTPShjxHVeVGPShHIZ+eS2Ws9Lh0aPzbFb1lU0Z40kPfKBCcRh9lemevW5E6ZlgV9P8quqB91vMv2818ZN4yHdCgvcz/OFrywKPtC7SNl/kyE9HXLVuYr2UkVjUNIajlVIfcOFow7kZykIqVxXnyJzKQUmQ7pKUPXfY5XOOe5hkoRyGfj42XDrAiCx7UpAm1RJXDSjVKmfWuuSVNTphmrWPlblFP089+aItBW+cKiTLW5N+67RcPo27hX4qo2TfJBjJBkgWAE4hjLKtXCzsTX6Xnk2RkqMlFRF0N/zpBJK2oxZ+G6I6AMesjrt1fRKDgVIl8tcb2iCvmk/3CV/odOT15pyii/e8MWcI6iAvDaRuXF/rKj+Eo/r1RVveQiuFVzXcIUj22Vs3uvl2yZuUSAswuLO+1w7JtPi8O/9NbQ+yJ1j7gM+8ijhZ3hatDgg+4ej/vHwz7wwgWdY5XH+XsDlSOQ1y936sWk9MLChyXCT+7lddW9drr626S/vKqocN+reHfTsgtsp63Q3K8guJT53feqnHKieofXNnp7JRZ4rvIPq5VY3NlyaiZ55/GSGJw6iu9INLkwXtjpM6YbqlYTL6yAe7rFRc1ZKczY8ahE6QUTWYKzh05f2WMxJ+pAIK9flX9wb5eZujJs/GFddOX0SgM3Hyrds1yjMgtsq3heXR8yhadI+kVAmUBexz9mt0tMqWEeuYX0C7QyxQs0iJpJvn8qWLMdzB0XmTniQZW8uE88VzgtJS9zG5NUpJfTzRJ8nxfxqAWBvGZFc5tLKhXI6+rfNuampz9WWT2u1KxfmIypTP/41PfDGLM5jTKhto7H4G6JQD7thk9oLjYKarml10+J/b+cP0QpGLKSs9GP/w29NE6GgV3qHJ0af6jaXaKbKK6Iy2h8YoSt8lELAnm9Km021m0rZa461SY7uu3kvLFb4hnCTDX0sS2jKQuKylQh63iXotRtqndyppn0gsYikLecP5N874Q4Ov0kHYgD0V5AAyG8BWODTmkWuhOXL94gKP9Y5RTJ77GYE3UhkNerjj+4M3krVs9pvqQDuC1v/TZp9GKoVCCvoH98amVfTNQRgKdYbMukFQuxuNMO/lb6p5/E9yWcMR5VtfXZiSnlwQV097hxVmoL/Si1p7fcF8Y88lRSp10FNSKQ16uOytuDugKysS351Yb1fVdl6sW1SChb3W8SArm9rhPI201VyP2t9MdOKjqGm2MNc8vl2mRb56vFnARy1IY55PCtbfSu6rD/sqVhvKnKBMImVvrHVedOimWOCws7LaXXi7T5zwp0L/lIYfDOKFjoaVw2uYFn0SZC/vmEcdSKCrnjdFX8eokFcahGmUDY5kp/na02vAOCNDXe9fMclfZa+tYpcfiX3vb3AFLrNYOPfSEH4TSUjl6wGfAvo/rE+wMhOubM8Y7wFrxkRTyRvbPV8sSklU6HQI5aUSFHmekUk9rTJwCYGT3lqsxOrmgINY+8k9hKfwxF2+UPBsFJ7+gp9IZCchBvzx9XycM+c//T3tbKMou/USsCucPWNno3a56WokL4x3SvMX+ZQdTcImJDTzuqd5Vj2m5L33g6f9JKKNokKCeIy/TFZHTZIVvjJ29Yio+7dcQxD7SsOEpPUam6Mt7TwVud7prTNGrYbt4WZVo42hw861yfUGaxcxPn0qNCegLPx0vu4YAGUIs7D/7dN6f7RYYt7gwuULTAc8/rdGh7Qu0I5PVqcnCadnODhzrMqNN9ZjmXViaQN2UMJY852uKaHuHK/gkt5B0siIW9E6L/3P4kU1GCCrjaEt/fU78gk6sz/V6BvE2G/HGId7Z+eJn1KagdgbxedQTyMrtgJqqAaxu9K1OEulsqzBPAoXb6LPPOx9pGb7XqHVPVbZa8Kpt8OEA/V6/ovwuZItVCi3vHRf/MvpGbR3XcTjDSMBxvrhdxSs+cYT5gZ07MBD3k9ap0C3m1q2DJq6Zf3V8qcRuqH/yD25vdKyXDeGO305+zUoFwigBataaMGix1m03YYAmzof/eop+8pRZfOym8vpe/Zb4QwfiVqENcpgYejuoVLyDllz/7I+/+kqOHHDNGhbxmqldbr/SvQqkQlhOgy2yWcanqqiaiHQXLHImp333RFcMrE17t5vZm1xz/db9EG8BqBS1Tebc5KaZvOEY9d3Vhg37yFlr81ilx9K538n9xb5L64pjVc2aPY4aokNevTDW6SJnbSoSOkpXVO9OEcT3rHMXKJPIqKuSr+p2LSU5pZd4tuVjlc0LfVpkXmbRdOWh7s3tVt96hZRa/eaL0L5w7USV3Iosx03xx8QbPEcwKgbx+l6sIH2sbvXMl2z6qCB3TVvib0l7RVGUeoype6JV5XNItHmWfG1W2Dkxa5Q/xjo+jVOsdobx9Oo8X/bnk/iY/foHbC8Yhjt2RosciyoKAnrio/MzWCos5MTsE8tm4VsFPKfsWfzp0VBHCJkUgH65MMDytW05K0S/wJl7Ym36nRPdgl9kO/2pFL1TPlPzztVdhKxlaiFDeTotfPxm6+B5iAAAGiUlEQVT83p4XdZ2YM8o94/+n4nm0q2CmCOSz8dIUCzLDNpMyb8nPPXTowFQ6ODqibKX22hShtkyIvVNwfpl/uE5X1Ed+reTUDMI4COUtpNpWOoMwcBcH72kiuSfFw8/+yPOvWn4o0TAE8tm5WyY86SBfNjxUFTqmqWReZczYcLrKXKaP/GyZUKufU2U2hSp6PpWtJF2essp/ZYrFeVS/4NOh/CMcjfZY/POT8e9qZvOhG/9MhJ05MXME8tlRofTBJIsqdXCaZm5uXugo0xNXql9ZB6aXy1zXQWWrxSrUjt2PrV8Ulgmje0WBXL+gKFtlvLG20Zu4Wq+vU3bB1T0mBsG0vdlVf/4+qJ/naLiFPz/hh+/J+sfH43neHos5MQ8E8tlSwfrVtY3ezWEtLKq/V11GCPGlKcJ4Uegos4Dw8qQtNzok8pfa+G5PEQZeWdvo3dV94YX0i8EyYwqF3gxq2Iu5adZJvLy20VPbm4984acuo+7rlC/0qljTAcvovy/PMQ6z+dQ88oVvHPd/Tz+Ue51gIx/PM6rkpavlH2ExJ+aBOeTzcVmH3D0dkO7ryvWqbg+pYnvnotBRdoHmXb3D4tBAr6vi1xq0vXsr6J0Er08RNNUEnq+ubfR6+l0V8x+Uc/q5VfYx2RtVwdfz1D8+RQuJes5/Xv+ZuJvzwvG8vg/Ttj9RHUch/aJzVRcUyq5PwAws/ekJsf+uw+AHmdl7aOuKV/w9z99w6Pc/+yPvppCEuSCQz9dpY/5zlQpDhw5OD0uEM/W7fmlto3dHV3PNYB8GvmlCH4LQO23PfbeiF3SmUdXx0DW9gHea3/+0XsBcZhHzKHssMMY4VAvL2kbvtv4zWcdzEVPy9jti8S+Oif67+vk3FLa0RF8aQTwvk0vx5c7SUpm1NUAlaFmx06jQMU2F8KJuRXnVON3QVX/C+BR06G3a1t697c3uWC0e+vdvcuC9xlb5GJd6rmxvdi/p3nLaWBpo4WvHg6K3rnyHIw+Dj9L4KpvAvWSl/MsLx45foFUF80Qgt89HxggdbeihnXpr+DbS29I35R//vUkX9Ooxm02cUHBHL9wDJqLebdze7K4SzJvHr5I/PBb9XlL/f2rDzZw8blbLvS/Lw8NVwjjmjUBer1szXrU/VuiYcipGWZOO9XO52n6p5GY7VbtSpqLcwK3Je7SqYFqpYF40kx8ztvBn/397587bRBBF4bu73ggKBJSpMBKk4OVEdEmRFfwB8w+wqJH8E6ClSiREiUyBMZ1pKZB/AgjayLGoKBAYUVBEazT2GRiMDPuYfXnPJ6VI48fu3d0z13fO8cX5YXbIf6PSOGdI51wkc+qkznD+v+O6j/u7l1sv9q984XkjRUNBni3HliLOoxBXdHRzXCx0knTlo7hurCMY/WgXbMHWSRkq1S2JaFHXRRBxBp6Q/wJhrq7Pi/AvL8Piub6cOOKNF44riw2bEObOX2Mpc9A4f+81/Fv9va37dT98pDxQkGcMNld2Mn6b2KJDuwlkLPrUa+9gDCOJIDpIk3BaZeBmExTwsJ9CjKcKzlH1BdFSZKf8FcU4yQrMmKsNz2q8bkdEHiYM+CIpcT974n3yDIeVZSGO6XLH+eD5G/cG+1dvPN+9xCROUiooyHMA4iYrUX44eNTaTiI6DNGXhShXs5ZNbZOIhUnc97kAu8W6dsrfwu4vr7lVvbCzlmKJFMQ7OXf7p9hL0aYYJ3mgrlW1+Vndi0XkPGr+kDPn+eEdbYjz3f3VHdf2hq7rfhSZPWmcOn1zEFy73t/belqLA0IqB20Pc0KJHBV+AstAG/PRE8z4pvJUVg8SBMoMLdkvKjHUXSHqRgksxM5ClKYZn6gshi9ylv7uU1gbZrLZV42+oMYepPApj8ozuqmQIsE1OzTvWah/bQ8ruKedMz6mrfyJWjI7E36TuSj3T2RTxrPN8LXjN8YShm9e3m4d1f34kGpAQR6PuN2OP0QBOp5NiKtuwhuw+gw9y11MLfoCiKYkwnyCSPZ/eVb3lh5CUVklruKmjiZJKbX1Oqk6tTjfPdTOXUuLpyjnzAra0hGR97r+bS0uJhA/BxTipIygLo9TWs4SQtYYZ7HzmBQBuiYBuiV6VroJoTIxhKhO8xzlITjwudr4214R9GKmjA6ZfpgvRu0EqJkoAl2fsxHOma0FSiKMOtP1H3WB+s4QN6OivwchhBCSFgpyQtYI/MqxzNcqidYV30G46COEELKWiMhPfr7fwBDIb7EAAAAASUVORK5CYII=`;
                    const doc = new jsPDF();

                    const adiantamento = $el.inputs.inputAdiantamento.val();

                    //borda titulo
                    doc.setDrawColor(43, 0, 153);
                    doc.setFillColor(255, 255, 255);
                    doc.roundedRect(10, 10, 190, 20, 3, 3, 'FD');

                    //logo
                    doc.addImage(logo, 'JPEG', 170, 12, 20, 16);

                    //titulo
                    doc.setFontSize(20);
                    doc.text(13, 22, 'Relação de Lotes de Reembolso - Aprovados');

                    //data
                    doc.setFontSize(11);
                    doc.text(10, 45, 'Nº do lacre: ' + store.numeroBordero);
																				
																			 
                    doc.text(10, 75, 'Tipo de Solicitação: ' + store.documento.tipoSolicitacao);

                    doc.text(140, 45, 'Data de Envio: ' + store.dataEnvio);
                    doc.text(140, 55, 'Adiantamento: ' + adiantamento);
                    doc.text(140, 65, 'Valor Total: R$ ' + (parseFloat(store.valorTotal) || 0).toFixed(2));

                    //borda titulo
                    doc.setDrawColor(43, 0, 153);
                    doc.setFillColor(255, 255, 255);
                    doc.roundedRect(10, 85, 190, 20, 3, 3, 'FD');

                    doc.text(10, 55, 'Empresa: ' + store.documento.razaoSocial);
                    doc.text(10, 65, 'CPF/CNPJ: ' + store.documento.cpfCnpj);
                    //condição para preencher o campo de acordo com o dado que vier em tipoSolicitacao
                    doc.setFontSize(20);

                    switch (store.documento.tipoSolicitacao) {
                        case "BANCO BV SA":
                        case "DEPOSITO JUDICIAL DEFINITIVO BANCO BV SA":
                        case "DEPOSITO JUDICIAL PROVISORIO BANCO BV SA":
                            doc.text(13, 98, 'Lotes de Reembolso - ' + tipoReembolso.BV_Leasing_Nome);
                            break;

                        default:
                            doc.text(13, 98, 'Lotes de Reembolso - ' + tipoReembolso.Banco_Votorantim);
                            break;
                    }


                    //titulo
                    // doc.setFontSize(20);
                    // store.documento.tipoSolicitacao == "BV LEASING" ? doc.text(13, 98, 'Lotes de Reembolso - '+ tipoReembolso.BV_Leasing_Nome) : doc.text(13, 98, 'Lotes de Reembolso - '+ tipoReembolso.Banco_Votorantim );

                    //logo
                    doc.addImage(logo, 'JPEG', 170, 87, 20, 16);

                    //tabela
                    const pdfTabela = [];

                    const doSelecionadoOrder = _.orderBy(store.documentosSelecionados, 'sequencia');
                    for (const index in doSelecionadoOrder) {
                        const doc = doSelecionadoOrder[index];
                        pdfTabela.push([
                            doc.sequencia,
                            doc.assessoriaPrestador,
                            doc.lote,
                            doc.despesa
                        ]);
                    }

                    const headers = ['Seq.', 'Assessoria/Prestador', 'Lote', 'Valor'];
                    doc.autoTable(headers, pdfTabela, { margin: { top: 120 } });
                    doc.text('', 40, doc.autoTableEndPosY() + 40);

                    //print PDF:
                    const docOutput = doc.output();
                    const base64Attachment = btoa(docOutput);

                    store.pdfBinario = base64Attachment;
                    store.pdfNome = 'Lote-' + store.numeroBordero + '-lacrado.pdf';

                    return doc.save(store.pdfNome, { returnPromise: true });
                }

                function iniciarDocumentoNoFluxo() {
                    return new Promise(function (resolve, reject) {
                        novoDocumento().then(function (docId) {
                            execProgressBarDocumento(store.progressoDocumentos.current);

                            iniciarDocumentoFluxo(docId)
                                .then(function () {
                                    execProgressBarDocumento(store.progressoDocumentos.current);

                                    inserirAnexoDocumento(docId)
                                        .then(function () {
                                            execProgressBarDocumento(store.progressoDocumentos.current);
                                            resolve(docId);
                                        })
                                        .catch(reject);
                                })
                                .catch(reject);
                        })
                            .catch(reject);
                    });
                }

                function novoDocumento() {
                    return new Promise(function (resolve, reject) {
                        debugger;
                        const adiantamento = $el.inputs.inputAdiantamento.val();

                        const campos = [
                            { Id: '1', Texto: store.numeroBordero },
                            { Id: '2', Texto: store.documento.razaoSocial },
                            { Id: '3', Texto: store.documento.cpfCnpj },
                            { Id: '4', Texto: adiantamento },
                            { Id: '5', Texto: store.dataEnvio },
                            { Id: '6', Texto: 'R$ ' + store.valorTotal },
                            { Id: '7', Texto: "" },
                            { Id: '8', Texto: "" },
                            { Id: '9', Texto: store.documento.pastaId },
                            { Id: '10', Texto: store.documento.tipoSolicitacao },
                        ];

                        const parametros = [
                            {
                                Chave: 'DadosTipoDocumental',
                                Valor: JSON.stringify({ PastaId: store.documento.pastaId, TipoDocumentoId: 4 })
                            },
                            {
                                Chave: 'DadosDocumento',
                                Valor: JSON.stringify(campos)
                            }
                        ];

                        console.log('parametros', {
                            pastaId: store.documento.pastaId,
                            tipoDocumentoId: 4,
                            campos
                        });

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.CRIAR_DOCUMENTO, parametros)
                            .then(function (response) {
                                if (!response || response.codigo !== 1) {
                                    reject(response.mensagem);
                                    return;
                                }

                                const docId = response.objeto.documentoId;

                                inserirLoteLacradoTabela(docId)
                                    .then(function () {
                                        resolve(docId);
                                    })
                                    .catch(reject);
                            })
                            .catch(reject)
                    });
                }

                function inserirLoteLacradoTabela(documentoId) {
                    return new Promise(function (resolve, reject) {
                        const params = [];

                        for (const index in store.documentosSelecionados) {
                            const item = store.documentosSelecionados[index];

                            params.push({
                                documentoId: documentoId,
                                documentoLacradoId: item.docId,
                                assessoriaPrestador: item.assessoriaPrestador,
                                numeroLote: item.lote,
                                valorLote: item.valorDespesa,

                                numeroLacre: store.numeroBordero,
                                cpfCnpj: store.documento.cpfCnpj,
                                tipoSolicitacao: store.documento.tipoSolicitacao,
                                dataEnvio: moment(store.dataEnvio, 'DD/MM/YYYY').format('YYYY-MM-DD')
                            });
                        }

                        const parametrosAnexo = [
                            {
                                Chave: 'DadosDocumento',
                                Valor: JSON.stringify(params)
                            }
                        ];

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.INSERIR_LOTE_LACRADO, parametrosAnexo)
                            .then(function (response) {
                                if (response.codigo !== 1) {
                                    reject();
                                    return;
                                }

                                resolve();
                            })
                            .catch(reject);
                    });
                }

                function inserirAnexoDocumento(docId) {
                    return new Promise(function (resolve, reject) {
                        const parametrosAnexo = [
                            {
                                Chave: 'DadosAnexo',
                                Valor: JSON.stringify({
                                    nomeArquivo: store.pdfNome,
                                    tipoAnexoId: 3,
                                    arquivoBase64: store.pdfBinario
                                })
                            },
                            {
                                Chave: 'DocumentoId',
                                Valor: docId
                            }
                        ];

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.ANEXAR_PDF_DOCUMENTO, parametrosAnexo)
                            .then(resolve)
                            .catch(reject);
                    });
                }

                function iniciarDocumentoFluxo(docId) {
                    return new Promise(function (resolve, reject) {
                        const parametrosFluxo = [
                            {
                                Chave: 'DadosDocumento',
                                Valor: JSON.stringify({
                                    processoId: 6,
                                    documentoId: docId,
                                })
                            }
                        ];

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.INICAR_DOCUMENTO_FLUXO, parametrosFluxo)
                            .then(resolve)
                            .catch(reject)
                    });
                }

                function reservarDocumento(docId) {
                    debugger;
                    return new Promise(function (resolve, reject) {
                        const parametros = [
                            {
                                Chave: 'DadosDocumento',
                                Valor: docId
                            }
                        ];

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.RESERVAR_DOCUMENTO, parametros)
                            .then(resolve)
                            .catch(reject)
                    });
                }

                function publicarDocumentoNovoLacre(docId) {
                    return new Promise(function (resolve, reject) {
                        const parametros = [
                            {
                                Chave: 'IdDocumento',
                                Valor: docId
                            },
                            {
                                Chave: 'DadosDocumento',
                                Valor: JSON.stringify([{
                                    id: 26,
                                    valor: store.numeroBordero,
                                    colunaTipo: 'C'
                                }])
                            }
                        ];

                        DocumentoVisualizacaoForm.asyncExecutarScriptExternoSemDocumento(ENUM_SCRIPTS.PUBLICAR_DOCUMENTO, parametros)
                            .then(resolve)
                            .catch(reject)
                    });
                }

                function ajaxMoverDocumentosLacradosEmLote() {
                    return new Promise(function (resolve, reject) {
                        // const transacaoSaidaId = 33; //homologação
                        const transacaoSaidaId = 41; //produção
                        const documentosId = [];
                        const instanciasId = [];

                        for (const index in store.documentosLacrados) {
                            const doc = store.documentosLacrados[index];
                            documentosId.push(doc.docId);
                            instanciasId.push(doc.instanciaId);
                        }

                        Ecm.Api2.Post('processos/transicoes/' + transacaoSaidaId + '/lote', {
                            documentosId: documentosId,
                            instanciasId: instanciasId
                        })
                            .done(resolve)
                            .fail(reject)
                    });
                }

                return {
                    init: init
                }
            })();

            Formulario.init();
        });
    </script></body>
</html>
