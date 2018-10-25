module Api
  module V1
    class InspauralsController < ApplicationController
      def index
        render :json => Inspaural.all
      end

      def create
        byebug
        render :json => Inspaural.all
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
    end
  end
end
