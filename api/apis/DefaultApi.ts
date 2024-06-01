import * as runtime from '../runtime';
import type {
  BodyFilterSearchByCompetitorFilterCompetitorPost,
  RankFeatureList,
} from '../models/index';
import {
    BodyFilterSearchByCompetitorFilterCompetitorPostToJSON,
    RankFeatureListToJSON,
} from '../models/index';

export interface FilterSearchByCompetitorFilterCompetitorPostRequest {
    search: string;
    summary: string;
    bodyFilterSearchByCompetitorFilterCompetitorPost: BodyFilterSearchByCompetitorFilterCompetitorPost;
}

export interface FilterSearchByFeaturesFilterFeaturePostRequest {
    search: string;
    summary: string;
    rankFeatureList: RankFeatureList;
}

export interface SearchCompetitorCompetitorPostRequest {
    search: string;
}

export interface SearchWebsiteSearchPostRequest {
    search: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Filtersearchbycompetitor
     */
    async filterSearchByCompetitorFilterCompetitorPostRaw(requestParameters: FilterSearchByCompetitorFilterCompetitorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling filterSearchByCompetitorFilterCompetitorPost().'
            );
        }

        if (requestParameters['summary'] == null) {
            throw new runtime.RequiredError(
                'summary',
                'Required parameter "summary" was null or undefined when calling filterSearchByCompetitorFilterCompetitorPost().'
            );
        }

        if (requestParameters['bodyFilterSearchByCompetitorFilterCompetitorPost'] == null) {
            throw new runtime.RequiredError(
                'bodyFilterSearchByCompetitorFilterCompetitorPost',
                'Required parameter "bodyFilterSearchByCompetitorFilterCompetitorPost" was null or undefined when calling filterSearchByCompetitorFilterCompetitorPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['summary'] != null) {
            queryParameters['summary'] = requestParameters['summary'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/filter/competitor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BodyFilterSearchByCompetitorFilterCompetitorPostToJSON(requestParameters['bodyFilterSearchByCompetitorFilterCompetitorPost']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Filtersearchbycompetitor
     */
    async filterSearchByCompetitorFilterCompetitorPost(requestParameters: FilterSearchByCompetitorFilterCompetitorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.filterSearchByCompetitorFilterCompetitorPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Filtersearchbyfeatures
     */
    async filterSearchByFeaturesFilterFeaturePostRaw(requestParameters: FilterSearchByFeaturesFilterFeaturePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling filterSearchByFeaturesFilterFeaturePost().'
            );
        }

        if (requestParameters['summary'] == null) {
            throw new runtime.RequiredError(
                'summary',
                'Required parameter "summary" was null or undefined when calling filterSearchByFeaturesFilterFeaturePost().'
            );
        }

        if (requestParameters['rankFeatureList'] == null) {
            throw new runtime.RequiredError(
                'rankFeatureList',
                'Required parameter "rankFeatureList" was null or undefined when calling filterSearchByFeaturesFilterFeaturePost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['summary'] != null) {
            queryParameters['summary'] = requestParameters['summary'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/filter/feature`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RankFeatureListToJSON(requestParameters['rankFeatureList']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Filtersearchbyfeatures
     */
    async filterSearchByFeaturesFilterFeaturePost(requestParameters: FilterSearchByFeaturesFilterFeaturePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.filterSearchByFeaturesFilterFeaturePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Read Root
     */
    async readRootGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Read Root
     */
    async readRootGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.readRootGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Searchcompetitor
     */
    async searchCompetitorCompetitorPostRaw(requestParameters: SearchCompetitorCompetitorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling searchCompetitorCompetitorPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/competitor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Searchcompetitor
     */
    async searchCompetitorCompetitorPost(requestParameters: SearchCompetitorCompetitorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchCompetitorCompetitorPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchwebsite
     */
    async searchWebsiteSearchPostRaw(requestParameters: SearchWebsiteSearchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling searchWebsiteSearchPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Searchwebsite
     */
    async searchWebsiteSearchPost(requestParameters: SearchWebsiteSearchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchWebsiteSearchPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
