module Api
  module V1
    class InspauralsController < ApplicationController
      def index
        render :json => Inspaural.all
      end

      def create
        render :json => Inspaural.all
      end

      def update
        render :json => Inspaural.all
      end

      def show
        render :json => Inspaural.all
      end

      def update
        render :json => Inspaural.all
      end
    end
  end
end
