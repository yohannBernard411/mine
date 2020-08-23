class MessagesController < ApplicationController

  def create
    @message = Message.new(params_message)
    if @message.save
      redirect_to root_path, notice: "Votre message à bien été envoyé"
    else
      redirect_to root_path, alert: "Merci de remplir toutes les cases"
    end
  end

  private

  def params_message
    params.require(:message).permit(:email, :title, :content)
  end

end
