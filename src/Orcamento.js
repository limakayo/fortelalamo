import React, { Component } from 'react'
import update from 'immutability-helper'
import * as emailJs from 'emailjs-com'
import Zoom from 'react-reveal/Zoom';

class Orcamento extends Component {

  state = {
    orcamento: {
      nome: '',
      email: '',
      telefone: '',
      evento: '',
      convidados: '',
      mensagem: ''
    },
    message: '',
    sended: false,
    sending: false
  }

  handleChange = (event) => {
    const { target } = event
    const { value } = target
    const { name } = target

    const orcamento = update(this.state.orcamento, {
      [name]: {$set: value}
    })

    this.setState({ orcamento })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let self = this

    this.setState({
      sending: true,
      sended: false
    })

    const serviceId = 'mailgun'
    const templateId = 'template_p93CSPAd'
    const userId = 'user_sB4cZeviDPooRHzYdqTsW'
    const templateParams = {
      fromName: this.state.orcamento.nome,
      fromEmail: this.state.orcamento.email,
      fromTelefone: this.state.orcamento.telefone,
      fromEvento: this.state.orcamento.evento,
      fromConvidados: this.state.orcamento.convidados,
      fromMessage: this.state.orcamento.mensagem,
    }

    emailJs.send(serviceId, templateId, templateParams, userId)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         self.setState({
           sending: false,
           sended: true,
           message: 'Orçamento solicitado com sucesso! Responderemos o mais breve possível!'
         })
      }, function(error) {
         console.log('FAILED...', error);
         self.setState({
           sending: false,
           sended: true,
           message: 'Ops! Ocorreu algum erro ao solicitar o orçamento. Por gentileza, entre em contato pelo e-mail "contato@fortealamo.com.br".'
         })
      });

    const orcamento = {
      nome: '',
      email: '',
      telefone: '',
      evento: '',
      convidados: '',
      mensagem: ''
    }

    this.setState({ orcamento })
  }

  render() {
    return (
      <section className="bg-dark text-white" id="orcamento">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">Solicite um Orçamento</h2>
            <p>Preencha o formulário abaixo que enviaremos uma proposta personalizada para você!</p>
          </div>
          <hr className="light my-4" />
          {this.state.sended ? (
            <h4 className="text-center pt-4">{this.state.message}</h4>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id="nome"
                    required
                    value={this.state.orcamento.nome}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    value={this.state.orcamento.email}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefone"
                    name="telefone"
                    required
                    value={this.state.orcamento.telefone}
                    onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="evento">Evento</label>
                  <select
                    id="evento"
                    name="evento"
                    className="form-control"
                    value={this.state.orcamento.evento}
                    required
                    onChange={this.handleChange}>
                    <option value="">Selecione</option>
                    <option value="Casamento">Casamento</option>
                    <option value="Festa Infantil">Aniversário Infantil</option>
                    <option value="15 anos">Aniversário 15 anos</option>
                    <option value="Formatura">Formatura</option>
                    <option value="Corporativo">Corporativo</option>
                    <option value="Corporativo (Jantar)">Corporativo (Jantar)</option>
                  </select>
                </div>
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="evento">N&#186; de convidados</label>
                  <input
                    type="text"
                    className="form-control"
                    id="convidados"
                    name="convidados"
                    value={this.state.orcamento.convidados}
                    onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-4">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    className="form-control"
                    id="mensagem"
                    name="mensagem"
                    rows="3"
                    value={this.state.orcamento.mensagem}
                    onChange={this.handleChange}></textarea>
                </div>
              </div>
              <div className="text-center">
                <Zoom delay={200}>
                  <button
                    type="submit"
                    className="btn btn-light btn-xl sr-button mt-4">
                    {this.state.sending ? 'Enviando...' : 'Enviar'}
                  </button>
                </Zoom>
              </div>
            </form>
          )}
        </div>
      </section>
    )
  }
}

export default Orcamento
