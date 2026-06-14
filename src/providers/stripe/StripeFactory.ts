import { PaymentProviderFactory } from '../../core/PaymentProviderFactory';
import { StripePaymentProvider } from './StripePaymentProvider';

export class StripeFactory implements PaymentProviderFactory {
	createPaymentProvider() {
		return new StripePaymentProvider();
	}
}
