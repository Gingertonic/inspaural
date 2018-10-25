module Api
  module V1
    class InspauralsController < ApplicationController
      def index
        render :json => Inspaural.all
      end

      def create
        if params[:id] != 0
          inspaural = Inspaural.find(params[:id])
        else
          inspaural = Inspaural.new(inspaural_params)
        end
        inspaural.ambience = Ambience.find(params[:selectedAmbience][:id])
        inspaural.user = User.find(1)
        inspaural.quote1_vol = params[:quote1][:volume]
        inspaural.quote2_vol = params[:quote2][:volume]
        inspaural.quote3_vol = params[:quote3][:volume]
        inspaural.quote4_vol = params[:quote4][:volume]
        inspaural.ambience_vol = params[:selectedAmbience][:volume]
        params[:selectedQuoteIds].each{|id| inspaural.quotes << Quote.find(id)}
        if inspaural.save
          render :json => inspaural
        else
          render :json => {"errors": inspaural.errors.full_messages}
        end
      end

      def show
        render :json => Inspaural.find(params[:id])
      end

      def destroy
        # PLACEHOLDER
        render :json => Inspaural.all
      end

      private
      def inspaural_params
        params.require(:inspaural).permit(:name)
      end
    end
  end
end
