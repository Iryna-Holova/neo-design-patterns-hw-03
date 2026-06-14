import { PaymentProviderFactory } from '../../core/PaymentProviderFactory';
import { ApplePaymentProvider } from './ApplePaymentProvider';

export class AppleFactory implements PaymentProviderFactory {
  createPaymentProvider() {
    return new ApplePaymentProvider();
  }
}
