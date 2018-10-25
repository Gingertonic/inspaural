module Api
  module V1
    class InspauralsController < ApplicationController
      def index
        render :json => Inspaural.all
      end

      def create
        # byebug
        newInspaural = Inspaural.new(inspaural_params)
        newInspaural.ambience = Ambience.find(params[:selectedAmbience][:id])
        newInspaural.user = User.find(1)
        newInspaural.quote1_vol = params[:quote1][:volume]
        newInspaural.quote2_vol = params[:quote2][:volume]
        newInspaural.quote3_vol = params[:quote3][:volume]
        newInspaural.quote4_vol = params[:quote4][:volume]
        newInspaural.ambience_vol = params[:selectedAmbience][:volume]
        params[:selectedQuoteIds].each{|id| newInspaural.quotes << Quote.find(id)}
        if newInspaural.save
          render :json => newInspaural
        else
          render :json => {"errors": newInspaural.errors.full_messages}
        end
      end

      def update
        # PLACEHOLDER
        render :json => Inspaural.all
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
